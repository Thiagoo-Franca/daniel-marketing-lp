"use client";

import { useState } from "react";
import { Reveal } from "../animations/Reveal";
import ModalProjetos from "./modal";
import { Content } from "@prismicio/client";
import ProjetosGrid from "./projetos-grid";

interface ProjetosProps {
  projetos: Content.ProjetoDocument[];
}

export default function Projetos({ projetos }: ProjetosProps) {
  const [selectedProject, setSelectedProject] =
    useState<Content.ProjetoDocument | null>(null);

  return (
    <section
      id="projetos"
      className="bg-black flex flex-col py-8 md:py-12 px-2 border-b border-gray-800 md:px-0 "
    >
      <div className="max-w-7xl mx-auto w-full">
        <Reveal>
          <h5 className="text-lg md:text-xl font-semibold text-left  text-gray-400">
            00:02 - Portfólio
          </h5>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="flex flex-row items-center w-full gap-4 md:gap-8 justify-between">
            <h2 className="text-3xl md:text-6xl font-bold text-white text-left  max-w-sm">
              Projetos
            </h2>
            <p className="text-gray-400  text-justify hidden md:block">
              Confira alguns dos nossos trabalhos mais recentes.
            </p>
          </div>
        </Reveal>
      </div>

      <ProjetosGrid
        projetos={projetos}
        setSelectedProject={setSelectedProject}
      />
      {selectedProject && (
        <ModalProjetos
          onClose={() => setSelectedProject(null)}
          projeto_data={selectedProject}
        />
      )}
    </section>
  );
}
