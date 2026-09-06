export type ContactPayload = {
  name: string;
  contact: string;
  service: string;
  message: string;
  company?: string;
};

export type ContactValidationResult =
  | { ok: true; data: ContactPayload }
  | { ok: false; errors: Partial<Record<keyof ContactPayload, string>> };

const allowedServices = new Set(["reels", "empresas", "eventos", "shorts", "outro"]);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isPhoneLike(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 13;
}

function isContactLike(value: string) {
  return emailPattern.test(value) || isPhoneLike(value);
}

export function validateContactPayload(payload: ContactPayload): ContactValidationResult {
  const errors: Partial<Record<keyof ContactPayload, string>> = {};
  const name = payload.name.trim();
  const contact = payload.contact.trim();
  const service = payload.service.trim();
  const message = payload.message.trim();
  const company = payload.company?.trim() ?? "";

  if (company) {
    errors.company = "Envio bloqueado por protecao anti-spam.";
  }

  if (!name) {
    errors.name = "Informe seu nome.";
  }

  if (!contact) {
    errors.contact = "Informe seu telefone, WhatsApp ou e-mail.";
  } else if (!isContactLike(contact)) {
    errors.contact = "Informe um telefone/WhatsApp ou e-mail valido.";
  }

  if (!service || !allowedServices.has(service)) {
    errors.service = "Escolha um tipo de servico.";
  }

  if (!message) {
    errors.message = "Escreva uma mensagem curta sobre o projeto.";
  } else if (message.length < 10) {
    errors.message = "A mensagem precisa ter pelo menos 10 caracteres.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: {
      name,
      contact,
      service,
      message,
      company: ""
    }
  };
}
