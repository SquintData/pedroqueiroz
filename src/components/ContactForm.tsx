"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

type FormStatus = {
  type: "idle" | "success" | "error";
  message: string;
};

const initialStatus: FormStatus = { type: "idle", message: "" };

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>(initialStatus);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(initialStatus);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      contact: String(formData.get("contact") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
      company: String(formData.get("company") ?? "")
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = (await response.json()) as { ok: boolean; message?: string };

      setStatus({
        type: result.ok ? "success" : "error",
        message: result.message ?? "Nao foi possivel enviar sua mensagem."
      });

      if (result.ok) {
        event.currentTarget.reset();
      }
    } catch {
      setStatus({
        type: "error",
        message: "Nao foi possivel enviar agora. Tente pelo WhatsApp."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm border border-bone/10 bg-graphite/76 p-5 shadow-glow sm:p-7"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-bone">
          Nome
          <input
            required
            name="name"
            autoComplete="name"
            className="focus-ring min-h-12 rounded-sm border border-bone/12 bg-coal px-4 text-bone placeholder:text-smoke"
            placeholder="Seu nome"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-bone">
          Telefone/WhatsApp ou e-mail
          <input
            required
            name="contact"
            autoComplete="tel"
            className="focus-ring min-h-12 rounded-sm border border-bone/12 bg-coal px-4 text-bone placeholder:text-smoke"
            placeholder="(63) 99999-9999"
          />
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm font-bold text-bone">
        Tipo de servico
        <select
          required
          name="service"
          className="focus-ring min-h-12 rounded-sm border border-bone/12 bg-coal px-4 text-bone"
          defaultValue=""
        >
          <option value="" disabled>
            Escolha uma opcao
          </option>
          <option value="reels">Reels para Instagram</option>
          <option value="empresas">Videos para empresas</option>
          <option value="eventos">Cobertura de eventos</option>
          <option value="shorts">TikTok / YouTube Shorts</option>
          <option value="outro">Outro</option>
        </select>
      </label>

      <label className="mt-4 grid gap-2 text-sm font-bold text-bone">
        Mensagem
        <textarea
          required
          name="message"
          minLength={10}
          rows={5}
          className="focus-ring rounded-sm border border-bone/12 bg-coal px-4 py-3 text-bone placeholder:text-smoke"
          placeholder="Conte o que voce precisa gravar ou editar."
        />
      </label>

      <label className="hidden" aria-hidden="true">
        Empresa
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>

      {status.message ? (
        <p
          className={`mt-4 rounded-sm border px-4 py-3 text-sm ${
            status.type === "success"
              ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-100"
              : "border-red-400/30 bg-red-400/10 text-red-100"
          }`}
          role="status"
        >
          {status.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="focus-ring mt-5 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-sm bg-ember px-5 text-sm font-extrabold uppercase tracking-[0.13em] text-coal transition hover:bg-bone disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send size={18} />
        {isSubmitting ? "Enviando..." : "Enviar mensagem"}
      </button>
    </form>
  );
}
