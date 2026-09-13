import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Reveal } from "@/components/animations/Reveal";
import Image from "next/image";

/**
 * Props for `QuemSomos`.
 */
export type QuemSomosProps = SliceComponentProps<Content.QuemSomosSlice>;

/**
 * Component for "QuemSomos" Slices.
 */

const QuemSomos: FC<QuemSomosProps> = ({ slice }) => {
  console.log("slice", slice.primary);

  const DADOS = slice.primary.estatisticas_pessoais.map((item) => ({
    numeros: item.estatisticas_pessoais,
    descricao: item.estatisticas_pessoais_descricao,
  }));

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <section
        className="w-full py-8 px-2 md:px-0 md:py-12 bg-black"
        id="quem-somos"
      >
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 w-full max-w-7xl mx-auto justify-between px-2 text-gray-400">
          <Reveal className="w-full lg:w-3/4 max-w-md">
            <div className="relative aspect-[3/4] hover:scale-102 transition-transform duration-300 rounded-lg overflow-hidden">
              {isFilled.image(slice.primary.foto_sua_3_4) && (
                <Image
                  src={slice.primary.foto_sua_3_4.url}
                  alt="Daniel França photo"
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </Reveal>
          <div className="flex flex-col gap-4 md:gap-8 w-full">
            <Reveal>
              <h5 className="text-lg md:text-xl font-semibold text-left ">
                Quem sou eu
              </h5>
            </Reveal>
            <Reveal delay={0.15}>
              <h1 className="text-3xl md:text-6xl font-bold text-white text-left  max-w-sm">
                {slice.primary.white_text}{" "}
                <span className="text-secondary font-bold">
                  {slice.primary.red_text}
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p>
                {slice.primary.descricao_1} <br />
                <br /> {slice.primary.descricao_2}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8  w-full max-w-7xl mx-auto mt-8 md:mt-12 px-2 md:px-0">
          {DADOS.map((item, index) => (
            <Reveal key={index} delay={0.45 + index * 0.15}>
              <div className="flex flex-col items-start pl-4 justify-center border-l-2 border-secondary">
                <span className="text-3xl md:text-5xl font-bold text-white">
                  {item.numeros}
                </span>
                <span className="text-lg md:text-xl font-semibold text-gray-400">
                  {item.descricao}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </section>
  );
};

export default QuemSomos;
