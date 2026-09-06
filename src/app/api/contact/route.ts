import { NextResponse } from "next/server";
import { validateContactPayload, type ContactPayload } from "@/lib/contact";

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Nao foi possivel ler os dados enviados." },
      { status: 400 }
    );
  }

  const validation = validateContactPayload(payload);

  if (!validation.ok) {
    return NextResponse.json(
      { ok: false, message: "Revise os campos destacados.", errors: validation.errors },
      { status: 400 }
    );
  }

  const endpoint = process.env.CONTACT_FORM_ENDPOINT;

  if (!endpoint) {
    return NextResponse.json({
      ok: true,
      message:
        "Mensagem validada. Configure CONTACT_FORM_ENDPOINT para envio real antes de publicar."
    });
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...validation.data,
      source: "site-pedro-queiroz"
    })
  });

  if (!response.ok) {
    return NextResponse.json(
      { ok: false, message: "Nao foi possivel enviar agora. Tente pelo WhatsApp." },
      { status: 502 }
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Mensagem enviada com sucesso. Pedro vai responder em breve."
  });
}
