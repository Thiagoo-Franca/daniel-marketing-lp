import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Reveal } from "@/components/animations/Reveal";
import Image from "next/image";
import SubtitleSections from "@/components/ui/subtitle-sections";

/**
 * Props for `QuemSomos`.
 */
export type QuemSomosProps = SliceComponentProps<Content.QuemSomosSlice>;

/**
 * Component for "QuemSomos" Slices.
 */

const QuemSomos: FC<QuemSomosProps> = ({ slice }) => {
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
        className="w-full py-8 md:py-24
        
        border border-white/10 before:absolute before:inset-0
        before:rounded-2xl
          before:bg-[linear-gradient(135deg,rgba(250,230,230,.2),transparent_40%,rgba(255,0,0,.15))]
      before:p-[1px] before:pointer-events-none relative rounded-2xl 
        bg-[#080808]
        
        "
        id="sobre-mim"
      >
        <div
          className="flex flex-col lg:flex-row gap-4 lg:gap-8 md:p-8 w-full max-w-7xl mx-auto justify-between px-2 text-muted-foreground 
       

      overflow-hidden
         pb-8 md:pb-12"
        >
          <SubtitleSections
            subtitle="00:03 - Quem sou eu"
            className="md:hidden"
          />

          <Reveal className="w-full lg:w-3/4 md:max-w-md">
            <div className="relative aspect-[3/4]  hover:scale-[1.02] transition-transform duration-300 rounded-lg overflow-hidden">
              {isFilled.image(slice.primary.foto_sua_3_4) && (
                <Image
                  src={slice.primary.foto_sua_3_4.url}
                  alt="Foto do Daniel França - Especialista em Marketing Digital e Produção de Conteúdo Audiovisual"
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </Reveal>
          <div className="flex flex-col gap-4 md:gap-8 w-full">
            <SubtitleSections
              subtitle="00:03 - Quem sou eu"
              className="hidden md:block"
            />

            <Reveal delay={0.15}>
              <h1 className="text-3xl md:text-7xl font-bold text-white text-left max-w-md leading-tight md:leading-tight">
                {slice.primary.white_text}{" "}
                <span
                  className="
    bg-gradient-to-r
    from-secondary
    via-red-400
    to-secondary
    bg-[length:200%_100%]
    bg-clip-text
    text-transparent
    animate-gradient-x
  "
                >
                  {slice.primary.red_text}
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-muted-foreground text-md text-left leading-relaxed md:text-lg md:leading-relaxed">
                {slice.primary.descricao_1} <br />
                <br /> {slice.primary.descricao_2}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6  w-full max-w-7xl mx-auto mt-8 md:mt-12 px-2 md:px-0">
          {DADOS.map((item, index) => (
            <Reveal key={index} delay={0.45 + index * 0.15}>
              <div className="flex flex-row p-4 rounded-lg items-center bg-black hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-white/10">
                <div className="flex flex-col items-start pl-4 justify-center border-l-2 border-secondary">
                  <span className="font-mono text-3xl md:text-5xl font-bold text-foreground">
                    {item.numeros}
                  </span>
                  <span className="text-lg md:text-xl font-semibold text-muted-foreground">
                    {item.descricao}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </section>
  );
};

export default QuemSomos;
