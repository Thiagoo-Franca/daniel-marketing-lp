import { Reveal } from "../animations/Reveal";

export default function QuemSomos() {
  return (
    <section className="w-full py-8 px-2 md:px-0 md:py-24 bg-black">
      <div className="flex flex-col gap-4 w-full max-w-7xl mx-auto justify-between px-2 text-gray-400">
        <Reveal>
          <h5 className="text-lg md:text-xl font-semibold text-left ">
            Quem sou eu
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
            Olá, meu nome é Daniel França, sou especialista em marketing digital
            e produção de conteúdo audiovisual. Com mais de 5 anos de
            experiência na área, ajudo empresas a se destacarem no mercado
            através de estratégias de marketing inovadoras e criativas. <br />
            <br /> Meu objetivo é transformar ideias em resultados reais,
            criando conteúdos que engajam, inspiram e geram conversões. Vamos
            trabalhar juntos para levar sua marca ao próximo nível!
          </p>
        </Reveal>
      </div>
    </section>
  );
}
