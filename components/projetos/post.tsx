import { Content } from "@prismicio/client";
import { ArrowIcon } from "../ui/icons";

interface PostProps {
  onClick?: () => void;
  projeto_data?: Content.ProjetoDocument; // ajustar depois
}

export default function Post({ onClick, projeto_data }: PostProps) {
  return (
    <div
      className="group relative w-full overflow-hidden rounded-sm aspect-[16/9] cursor-pointer"
      onClick={onClick}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-105"
        style={{
          backgroundImage: `url('${projeto_data?.data.capa.url}')`,
        }}
      />

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 rounded-lg" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent rounded-lg md:hidden" />

      <div className="bg-secondary w-6 h-6 md:w-10 md:h-10 rounded-full flex items-center justify-center absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
        <ArrowIcon aria-label="Ver detalhes" />
      </div>
      <div className="absolute  bottom-4  left-4 md:opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
        <h2 className="text-xl font-bold text-secondary">
          {projeto_data?.data.titulo}
        </h2>
        <p className="text-gray-400 text-sm text-white  hidden md:block">
          {projeto_data?.data.descricao}
        </p>
      </div>
    </div>
  );
}
