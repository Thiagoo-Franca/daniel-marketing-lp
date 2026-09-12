import { Reveal } from "../animations/Reveal";

export default function Projetos() {
  return (
    <section className="bg-black flex flex-col py-8 md:py-12 px-2 md:px-0 ">
      <div className="max-w-7xl mx-auto w-full">
        <Reveal>
          <h5 className="text-white text-sm font-light">Portifólio</h5>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="flex flex-row items-center w-full gap-4 md:gap-8 justify-between">
            <h1 className="text-white text-2xl md:text-6xl font-bold">
              Projetos
            </h1>
            <p className="text-gray-400">
              Confira alguns dos nossos trabalhos mais recentes.
            </p>
          </div>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8  w-full max-w-7xl mx-auto mt-8 md:mt-12 px-2 md:px-0">
        <div
          className="group relative w-full bg-cover bg-center bg-no-repeat py-16 md:py-32 cursor-pointer hover:scale-102 transition-transform duration-300"
          style={{
            backgroundImage: "url('/assets/callToActionImage.jpg')",
          }}
        >
          <div className="bg-secondary w-6 h-6 md:w-10 md:h-10 rounded-full flex items-center justify-center absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <svg
              className="w-3 h-3 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h2 className="text-xl font-bold text-secondary">
              Nome do Projeto
            </h2>
            <p className="text-gray-400 text-sm text-white">
              Descrição do projeto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
