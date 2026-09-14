import Image from "next/image";
import { Reveal } from "../animations/Reveal";

const DADOS = [
  {
    numeros: "4+",
    descricao: "Anos de experiência",
  },
  {
    numeros: "1M",
    descricao: "Visualizações de conteúdo",
  },
  {
    numeros: "50+",
    descricao: "Clientes satisfeitos",
  },
  {
    numeros: "100%",
    descricao: "Comprometimento com resultados",
  },
];

export default function QuemSomos() {
  return (
    <section
      className="w-full py-8 px-2 md:px-0 md:py-12 bg-black"
      id="sobre-mim"
    >
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 w-full max-w-7xl mx-auto justify-between px-2 text-gray-400">
        <Reveal className="w-full lg:w-1/2 max-w-md">
          <div className="relative aspect-[3/4] hover:scale-102 transition-transform duration-300 rounded-lg overflow-hidden">
            <Image
              src="/assets/callToActionImage.jpg"
              alt="Daniel França"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </Reveal>
        <div className="flex flex-col gap-4 md:gap-8">
          <Reveal>
            <h5 className="text-lg md:text-xl font-semibold text-left ">
              00:03 - Quem sou eu
            </h5>
          </Reveal>
          <Reveal delay={0.15}>
            <h1 className="text-3xl md:text-6xl font-bold text-white text-left  max-w-sm">
              Por trás das{" "}
              <span className="text-secondary font-bold">Lentes</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p>
              Olá, meu nome é Daniel França, sou especialista em marketing
              digital e produção de conteúdo audiovisual. Com mais de 4 anos de
              experiência na área, ajudo empresas a se destacarem no mercado
              através de estratégias de marketing inovadoras e criativas. <br />
              <br /> Meu objetivo é transformar ideias em resultados reais,
              criando conteúdos que engajam, inspiram e geram conversões. Vamos
              trabalhar juntos para levar sua marca ao próximo nível!
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
  );
}
