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
      <p className="text-muted-foreground text-center mt-8 md:mt-12">
        Nenhum projeto encontrado. Por favor, verifique novamente mais tarde.
      </p>
    );
  }

  return (
    <div className="grid  md:grid-cols-2  gap-6 md:gap-8 w-full   max-w-7xl mx-auto mt-8 md:mt-12 px-2 md:px-0">
      {projetos.map((projeto) => (
        <Reveal
          key={projeto.id}
          delay={0.15 + projetos.indexOf(projeto) * 0.15}
        >
          <Post
            aria-label="Ver detalhes"
            key={projeto.id}
            projeto_data={projeto}
            onClick={() => setSelectedProject(projeto)}
          />
        </Reveal>
      ))}
    </div>
  );
}
