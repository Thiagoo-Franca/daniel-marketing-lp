"use client";

import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Post from "@/components/projetos/post";
import { Reveal } from "@/components/animations/Reveal";

/**
 * Props for `Projetos`.
 */
export type ProjetosProps = SliceComponentProps<Content.ProjetosSlice>;

/**
 * Component for "Projetos" Slices.
 */

const Projetos: FC<ProjetosProps> = ({ slice }) => {
  const [selectedProject, setSelectedProject] =
    useState<Content.ProjetoDocument | null>(null);

  console.log("slice", slice);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
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
          {slice.primary.map((projeto, index) => (
            <Post
              key={index}
              onClick={() => setSelectedProject(projeto)}
              projeto_data={projeto.data}
            />
          ))}
        </div>
        {
          // selectedProject && (
          // <ModalProjetos
          // projeto_data={selectedProject}
          // onClose={() => setSelectedProject(null)}
          // />
          // )
        }
      </section>
    </section>
  );
};

export default Projetos;
