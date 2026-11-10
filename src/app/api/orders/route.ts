import { randomBytes } from "node:crypto";
import { getProduct, priceValue } from "@/data/products";
import {
  PAYMENT_METHODS,
  SHIPPING_OPTIONS,
  validateCustomer,
  type CustomerDetails,
  type OrderRequest,
  type OrderResponse,
} from "@/lib/checkout";

const round = (n: number) => Math.round(n * 100) / 100;

function bad(message: string, status = 400, fields?: Record<string, string>) {
  return Response.json({ error: message, fields }, { status });
}

/**
 * Places an order. Prices, shipping and totals are recalculated here from the
 * product catalogue, never taken from the browser.
 *
 * Where orders go: set ORDER_WEBHOOK_URL (e.g. a Zapier / Make / Slack / Google Apps
 * Script webhook) and every order is POSTed there as JSON. Orders are also written to
 * the server log.
 */
export async function POST(request: Request) {
  let body: OrderRequest;
  try {
    body = (await request.json()) as OrderRequest;
  } catch {
    return bad("Invalid request");
  }

  const customer = Object.fromEntries(
    Object.entries(body?.customer ?? {}).map(([k, v]) => [k, String(v ?? "").trim()]),
  ) as CustomerDetails;
  const fieldErrors = validateCustomer(customer);
  if (Object.keys(fieldErrors).length) {
    return bad("Please check your details", 422, fieldErrors as Record<string, string>);
  }

  const shipping = SHIPPING_OPTIONS.find((o) => o.id === body.shipping);
  if (!shipping) return bad("Choose a shipping method");

  const payment = PAYMENT_METHODS.find((m) => m.id === body.payment && m.enabled);
  if (!payment) return bad("This payment method is not available yet");

  if (!Array.isArray(body.items) || body.items.length === 0 || body.items.length > 50) {
    return bad("Your cart is empty");
  }
  const items: OrderResponse["items"] = [];
  for (const line of body.items) {
    const product = getProduct(String(line?.slug));
    const quantity = Math.floor(Number(line?.quantity));
    if (!product || !(quantity >= 1 && quantity <= 99)) {
      return bad("Some items in your cart are no longer available. Please review your cart.");
    }
    items.push({
      slug: product.slug,
      name: product.name,
      image: product.image,
      quantity,
      lineTotal: round(priceValue(product) * quantity),
    });
  }

  const subtotal = round(items.reduce((n, i) => n + i.lineTotal, 0));
  const total = round(subtotal + shipping.price);
  const date = new Date();
  const orderNumber = `VW-${date.toISOString().slice(2, 10).replace(/-/g, "")}-${randomBytes(3)
    .toString("hex")
    .toUpperCase()}`;

  const order = {
    orderNumber,
    placedAt: date.toISOString(),
    payment: payment.label,
    paymentStatus: payment.id === "cod" ? "Collect on delivery" : "Pending",
    customer,
    shipping: { method: shipping.label, price: shipping.price },
    items: items.map(({ slug, name, quantity, lineTotal }) => ({
      slug,
      name,
      quantity,
      lineTotal,
    })),
    subtotal,
    total,
    currency: "USD",
  };

  console.log("[order]", JSON.stringify(order));

  const webhook = process.env.ORDER_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });
      if (!res.ok) throw new Error(`webhook responded ${res.status}`);
    } catch (err) {
      console.error("[order] could not deliver order to ORDER_WEBHOOK_URL", err);
      return bad("We couldn't place your order right now. Please try again in a moment.", 502);
    }
  }

  const response: OrderResponse = {
    orderNumber,
    items,
    subtotal,
    shipping: { label: shipping.label, price: shipping.price },
    total,
    payment: payment.label,
    email: customer.email,
    firstName: customer.firstName,
  };
  return Response.json(response, { status: 201 });
}
