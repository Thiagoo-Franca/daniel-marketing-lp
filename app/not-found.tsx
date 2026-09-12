import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center w-full justify-center h-screen bg-primary text-white">
      <h1 className="text-4xl font-bold mb-4 text-center">
        404 - Página não encontrada
      </h1>
      <p className="text-lg mb-8">
        A página que você está procurando não existe.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-secondary text-white rounded hover:bg-secondary/90 transition"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
}
