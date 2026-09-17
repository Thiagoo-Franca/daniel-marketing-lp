"use client";

import { useState } from "react";
import { Reveal } from "../animations/Reveal";
import ModalProjetos from "./modal";
import { Content } from "@prismicio/client";
import ProjetosGrid from "./projetos-grid";
import SubtitleSections from "../ui/subtitle-sections";

interface ProjetosProps {
  projetos: Content.ProjetoDocument[];
}

export default function Projetos({ projetos }: ProjetosProps) {
  const [selectedProject, setSelectedProject] =
    useState<Content.ProjetoDocument | null>(null);

  return (
    <section
      id="projetos"
      className="bg-black flex flex-col py-8 md:py-12 px-2 md:px-0 "
    >
      <div className="max-w-7xl mx-auto w-full">
        <SubtitleSections
          subtitle="00:02 - Portfólio"
          className="text-md md:text-lg text-muted-foreground"
        />

        <Reveal delay={0.15}>
          <div className="flex flex-row items-end w-full gap-4 md:gap-8 justify-between mt-2">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground text-left max-w-sm leading-none">
              Projetos
            </h2>
            <p className="text-muted-foreground text-right hidden md:block max-w-xs text-sm md:text-base leading-relaxed">
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
