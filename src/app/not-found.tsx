import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[72vh] max-w-4xl flex-col justify-center px-5 py-24 text-center sm:px-8">
      <p className="text-sm font-bold uppercase tracking-[0.28em] text-ember">404</p>
      <h1 className="mt-5 font-display text-5xl font-bold leading-tight text-bone sm:text-7xl">
        Este take nao entrou no corte final.
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-smoke">
        A pagina que voce tentou abrir nao existe ou mudou de endereco. Volte
        para a home e encontre o contato certo do Pedro.
      </p>
      <Link
        href="/"
        className="focus-ring mx-auto mt-9 inline-flex items-center gap-2 rounded-sm bg-ember px-6 py-4 text-sm font-extrabold uppercase tracking-[0.16em] text-coal transition hover:-translate-y-0.5 hover:bg-bone"
      >
        <ArrowLeft size={18} />
        Voltar para home
      </Link>
    </main>
  );
}
