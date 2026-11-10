/**
 * Newsletter sign-ups (popup and footer form).
 *
 * Set NEWSLETTER_WEBHOOK_URL to forward each sign-up as JSON, e.g. to a Zapier / Make
 * webhook that adds the contact to Mailchimp, Klaviyo or a Google Sheet. Without it,
 * sign-ups are only written to the server log.
 */
export async function POST(request: Request) {
  let email = "";
  let source = "website";
  try {
    const body = (await request.json()) as { email?: unknown; source?: unknown };
    email = String(body.email ?? "")
      .trim()
      .toLowerCase();
    source = String(body.source ?? "website").slice(0, 40);
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 422 });
  }

  const signup = { email, source, subscribedAt: new Date().toISOString() };
  console.log("[newsletter]", JSON.stringify(signup));

  const webhook = process.env.NEWSLETTER_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signup),
      });
      if (!res.ok) throw new Error(`webhook responded ${res.status}`);
    } catch (err) {
      console.error("[newsletter] could not deliver sign-up to NEWSLETTER_WEBHOOK_URL", err);
      return Response.json(
        { error: "We couldn't sign you up right now. Please try again later." },
        { status: 502 },
      );
    }
  }

  return Response.json({ ok: true }, { status: 201 });
}
