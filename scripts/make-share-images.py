#!/usr/bin/env python3
"""
Builds the 1200x630 JPG link-preview ("share") images in public/images/share/.

Run it again after adding products, categories or blog posts:

    pip install Pillow
    python3 scripts/make-share-images.py

Pages without their own image fall back to public/images/share/default.jpg
(see src/lib/share.ts).
"""
import os
import re
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUB = os.path.join(ROOT, "public")
OUT = os.path.join(PUB, "images", "share")
W, H = 1200, 630
INK, LIME, WHITE, GREY = (14, 14, 14), (225, 236, 43), (255, 255, 255), (160, 160, 160)

FONT_BOLD = os.path.join(PUB, "fonts", "oswald", "Oswald-600.ttf")
FONT_MED = os.path.join(PUB, "fonts", "oswald", "Oswald-500.ttf")
LOGO_LIGHT = Image.open(os.path.join(PUB, "images", "brand", "logo-light.png")).convert("RGBA")


def font(size, bold=True):
    return ImageFont.truetype(FONT_BOLD if bold else FONT_MED, size)


def pub(path):
    return os.path.join(PUB, path.lstrip("/"))


def cover(img, w, h, fy=0.5):
    iw, ih = img.size
    r = w / h
    cw, ch = (iw, iw / r) if iw / ih < r else (ih * r, ih)
    x, y = (iw - cw) / 2, max(0, min(ih - ch, fy * ih - ch / 2))
    return img.crop((round(x), round(y), round(x + cw), round(y + ch))).resize((w, h), Image.LANCZOS)


def trim_white(img):
    box = Image.eval(img.convert("L"), lambda v: 255 if v < 245 else 0).getbbox()
    return img.crop(box) if box else img


def fit(img, w, h, pad=0.1):
    img = trim_white(img)
    s = min(w * (1 - 2 * pad) / img.width, h * (1 - 2 * pad) / img.height)
    return img.resize((max(1, int(img.width * s)), max(1, int(img.height * s))), Image.LANCZOS)


def wrap(draw, text, fnt, max_w, max_lines):
    words, lines, cur = text.split(), [], ""
    for word in words:
        t = (cur + " " + word).strip()
        if draw.textlength(t, font=fnt) > max_w and cur:
            lines.append(cur)
            cur = word
        else:
            cur = t
    lines.append(cur)
    if len(lines) > max_lines:
        lines = lines[:max_lines]
        while draw.textlength(lines[-1] + "…", font=fnt) > max_w and " " in lines[-1]:
            lines[-1] = lines[-1].rsplit(" ", 1)[0]
        lines[-1] += "…"
    return lines


def logo(canvas, x, y, height=58):
    lg = LOGO_LIGHT.resize((int(LOGO_LIGHT.width * height / LOGO_LIGHT.height), height), Image.LANCZOS)
    canvas.paste(lg, (x, y), lg)


def eyebrow(draw, x, y, text):
    f = font(22, False)
    tw = draw.textlength(text.upper(), font=f)
    draw.rounded_rectangle((x, y, x + tw + 28, y + 38), radius=19, fill=LIME)
    draw.text((x + 14, y + 19), text.upper(), font=f, fill=INK, anchor="lm")


def save(img, name):
    path = os.path.join(OUT, name)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    img.convert("RGB").save(path, "JPEG", quality=84, optimize=True, progressive=True)


def photo_banner(src, name, title, label, fy=0.5, size=74):
    """Lifestyle photo with a dark gradient, logo, lime label and title."""
    img = cover(Image.open(pub(src)).convert("RGB"), W, H, fy)
    shade = Image.new("L", (W, H))
    sd = ImageDraw.Draw(shade)
    for x in range(W):
        sd.line([(x, 0), (x, H)], fill=int(215 * max(0, 1 - x / (W * 0.78)) ** 1.2))
    img = Image.composite(Image.new("RGB", (W, H), INK), img, shade)
    d = ImageDraw.Draw(img)
    logo(img, 60, 52)
    f = font(size)
    lines = wrap(d, title.upper(), f, 680, 3)
    lh = int(size * 1.08)
    y = H - 64 - lh * len(lines)
    eyebrow(d, 60, y - 58, label)
    for ln in lines:
        d.text((60, y), ln, font=f, fill=WHITE)
        y += lh
    d.rectangle((0, H - 10, W, H), fill=LIME)
    save(img, name)


def product_banner(p, category_name, name):
    """Product photo on white with a black info panel."""
    img = Image.new("RGB", (W, H), WHITE)
    shot = fit(Image.open(pub(p["image"])).convert("RGB"), 640, H, 0.1)
    img.paste(shot, ((640 - shot.width) // 2, (H - shot.height) // 2))
    d = ImageDraw.Draw(img)
    d.rectangle((640, 0, W, H), fill=INK)
    logo(img, 690, 52, 50)
    eyebrow(d, 690, 190, category_name)
    f = font(56)
    y = 248
    for ln in wrap(d, p["name"].upper(), f, 460, 3):
        d.text((690, y), ln, font=f, fill=WHITE)
        y += 62
    y += 18
    pf = font(46, False)
    d.text((690, y), p["price"], font=pf, fill=LIME)
    px = 690 + d.textlength(p["price"], font=pf) + 18
    cf = font(30, False)
    d.text((px, y + 12), p["comparePrice"], font=cf, fill=GREY)
    cw = d.textlength(p["comparePrice"], font=cf)
    d.line((px, y + 32, px + cw, y + 32), fill=GREY, width=3)
    d.rectangle((640, H - 10, W, H), fill=LIME)
    save(img, name)


def gear_banner(items, title, label, name):
    """Up to four products in a row on white, with a black title panel."""
    img = Image.new("RGB", (W, H), WHITE)
    d = ImageDraw.Draw(img)
    d.rectangle((0, 0, 430, H), fill=INK)
    logo(img, 50, 52, 48)
    f = font(64)
    lines = wrap(d, title.upper(), f, 340, 3)
    y = H - 70 - 70 * len(lines)
    eyebrow(d, 50, y - 58, label)
    for ln in lines:
        d.text((50, y), ln, font=f, fill=WHITE)
        y += 70
    items = items[:4]
    cols = 2 if len(items) > 2 else len(items)
    rows = (len(items) + cols - 1) // cols
    cw, ch = (W - 430) // cols, H // rows
    for i, p in enumerate(items):
        shot = fit(Image.open(pub(p["image"])).convert("RGB"), cw, ch, 0.12)
        cx, cy = 430 + (i % cols) * cw, (i // cols) * ch
        img.paste(shot, (cx + (cw - shot.width) // 2, cy + (ch - shot.height) // 2))
    d.rectangle((0, H - 10, W, H), fill=LIME)
    save(img, name)


def ts_objects(path, array):
    """Very small reader for the object arrays in src/data/*.ts."""
    src = open(os.path.join(ROOT, path), encoding="utf8").read()
    start = src.index(f"export const {array}")
    body = src[src.index("[", start): src.index("\n];", start)]
    objs = re.split(r"\n  \{", body)[1:]
    out = []
    for o in objs:
        get = lambda k: (re.search(rf'\n\s+{k}:\s*\n?\s*"((?:[^"\\]|\\.)*)"', o) or [None, ""])[1]
        out.append({k: get(k) for k in ("slug", "name", "title", "category", "image", "price", "comparePrice")})
    return out


def main():
    products = ts_objects("src/data/products.ts", "products")
    categories = ts_objects("src/data/products.ts", "categories")
    posts = ts_objects("src/data/blog.ts", "posts")
    cat_name = {c["slug"]: c["name"] for c in categories}

    photo_banner("/images/social/default.webp", "default.jpg", "Performance sportswear built for speed", "Velocity Wear", 0.45)
    photo_banner("/images/hero/running.webp", "shop.jpg", "Shop the collection", "New season", 0.5)
    photo_banner("/images/about/fuel-your-passion.webp", "about.jpg", "Built for athletes who move fast", "About us", 0.5)
    photo_banner("/images/pages/blog-banner.webp", "blog.jpg", "Training tips & sportswear guides", "Blog", 0.55)
    photo_banner("/images/pages/contact.webp", "contact.jpg", "Talk to our sportswear specialists", "Contact", 0.4)
    photo_banner("/images/home/about-banner.webp", "faq.jpg", "Questions? We've got answers", "FAQ", 0.5)

    for c in categories:
        items = [p for p in products if p["category"] == c["slug"]]
        if c["slug"] in ("caps", "water-bottles", "bags", "accessories"):
            gear_banner(items, c["title"], "Shop", f"categories/{c['slug']}.jpg")
        else:
            photo_banner(f"/images/categories/{c['slug']}.webp", f"categories/{c['slug']}.jpg", c["title"], f"{len(items)} products", 0.45)

    for p in products:
        product_banner(p, cat_name.get(p["category"], ""), f"products/{p['slug']}.jpg")

    for post in posts:
        photo_banner(post["image"], f"blog/{post['slug']}.jpg", post["title"], "Sportswear guides", 0.45, 60)

    print(f"done: {len(products)} products, {len(categories)} categories, {len(posts)} posts")


if __name__ == "__main__":
    main()
