/**
 * Contact form messages.
 *
 * Set CONTACT_WEBHOOK_URL to forward each message as JSON (e.g. a Zapier / Make webhook
 * that emails you or posts to Slack). Without it, messages are only written to the
 * server log.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  const field = (key: string, max: number) =>
    String(body[key] ?? "")
      .trim()
      .slice(0, max);
  const message = {
    firstName: field("firstName", 100),
    lastName: field("lastName", 100),
    email: field("email", 200).toLowerCase(),
    subject: field("subject", 200),
    message: field("message", 5000),
    receivedAt: new Date().toISOString(),
  };

  if (!message.firstName || !message.lastName || !message.subject) {
    return Response.json({ error: "Please fill in all required fields." }, { status: 422 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(message.email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 422 });
  }

  console.log("[contact]", JSON.stringify(message));

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message),
      });
      if (!res.ok) throw new Error(`webhook responded ${res.status}`);
    } catch (err) {
      console.error("[contact] could not deliver message to CONTACT_WEBHOOK_URL", err);
      return Response.json(
        { error: "We couldn't send your message right now. Please try again later." },
        { status: 502 },
      );
    }
  }

  return Response.json({ ok: true }, { status: 201 });
}
