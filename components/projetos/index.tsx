"use client";

import { useState } from "react";
import { Reveal } from "../animations/Reveal";
import Post from "./post";
import ModalProjetos from "./modal";
import { Content } from "@prismicio/client";

interface ProjetosProps {
  projetos: Content.ProjetoDocument[];
}

export default function Projetos({ projetos }: ProjetosProps) {
  const [selectedProject, setSelectedProject] =
    useState<Content.ProjetoDocument | null>(null);

  if (!projetos || projetos.length === 0) {
    return (
      <section
        id="projetos"
        className="bg-black flex flex-col py-8 md:py-12 px-2 md:px-0 "
      >
        <div className="max-w-7xl mx-auto w-full">
          <Reveal>
            <h5 className="text-lg md:text-xl font-semibold text-left  text-gray-400">
              Portfólio
            </h5>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-row items-center w-full gap-4 md:gap-8 justify-between">
              <h1 className="text-3xl md:text-6xl font-bold text-white text-left  max-w-sm">
                Projetos
              </h1>
              <p className="text-gray-400">
                Confira alguns dos nossos trabalhos mais recentes.
              </p>
            </div>
          </Reveal>
          <h1>
            Nenhum projeto encontrado. Por favor, verifique novamente mais
            tarde.
          </h1>
        </div>
      </section>
    );
  }
  return (
    <section
      id="projetos"
      className="bg-black flex flex-col py-8 md:py-12 px-2 md:px-0 "
    >
      <div className="max-w-7xl mx-auto w-full">
        <Reveal>
          <h5 className="text-lg md:text-xl font-semibold text-left  text-gray-400">
            Portfólio
          </h5>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="flex flex-row items-center w-full gap-4 md:gap-8 justify-between">
            <h1 className="text-3xl md:text-6xl font-bold text-white text-left  max-w-sm">
              Projetos
            </h1>
            <p className="text-gray-400">
              Confira alguns dos nossos trabalhos mais recentes.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4  w-full max-w-7xl mx-auto mt-8 md:mt-12 px-2 md:px-0">
        {projetos.map((projeto) => (
          <Post
            key={projeto.id}
            projeto_data={projeto}
            onClick={() => setSelectedProject(projeto)}
          />
        ))}
      </div>
      {selectedProject && (
        <ModalProjetos
          onClose={() => setSelectedProject(null)}
          projeto_data={selectedProject}
        />
      )}
    </section>
  );
}
