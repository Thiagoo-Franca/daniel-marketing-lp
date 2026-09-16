import { Content } from "@prismicio/client";
import { Reveal } from "../animations/Reveal";
import Post from "./post";

interface ProjetoGridProps {
  projetos: Content.ProjetoDocument[];
  setSelectedProject: (projeto: Content.ProjetoDocument) => void;
}

export default function ProjetosGrid({
  projetos,
  setSelectedProject,
}: ProjetoGridProps) {
  if (!projetos || projetos.length === 0) {
    return (
      <p className="text-gray-400 text-center mt-8 md:mt-12">
        Nenhum projeto encontrado. Por favor, verifique novamente mais tarde.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 w-full md:w-9/10  max-w-7xl mx-auto mt-8 md:mt-12 px-2 md:px-0">
      {projetos.map((projeto) => (
        <Reveal key={projeto.id} delay={0.15}>
          <Post
            key={projeto.id}
            projeto_data={projeto}
            onClick={() => setSelectedProject(projeto)}
          />
        </Reveal>
      ))}
    </div>
  );
}
