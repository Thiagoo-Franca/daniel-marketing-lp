import { Reveal } from "../animations/Reveal";

const SERVICES = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
        />
      </svg>
    ),
    title: "Fotografia",
    desc: "Cobertura fotográfica profissional de eventos, retratos, produtos e campanhas. Cada frame conta uma história que converte.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
        />
      </svg>
    ),
    title: "Vídeo",
    desc: "Produção audiovisual cinematográfica para campanhas, eventos, reels e conteúdos que param o scroll e geram resultado.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-3 3h3"
        />
      </svg>
    ),
    title: "Social Media",
    desc: "Estratégia e produção de conteúdo para Instagram, TikTok e YouTube. Feed que vende, stories que engajam.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
        />
      </svg>
    ),
    title: "Marketing",
    desc: "Planejamento estratégico de marca, identidade visual e campanhas que posicionam seu negócio acima da concorrência.",
  },
];
export default function Servicos() {
  return (
    <section
      id="servicos"
      className="bg-black flex flex-col py-8 md:py-12 px-2 md:px-0 "
    >
      <div className="flex flex-col gap-4  w-full max-w-7xl mx-auto justify-between px-2 md:px-0 text-gray-400">
        <Reveal>
          <h5 className="text-lg md:text-xl font-semibold text-left ">
            O que eu faço
          </h5>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-3xl md:text-5xl font-bold text-white text-left  max-w-sm mb-4">
            Serviços
          </h1>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => (
            <Reveal key={index} delay={0.2 * index}>
              <div
                key={index}
                className="group bg-primary flex flex-col gap-4 p-6  rounded-lg shadow-md hover:scale-102 transition-transform duration-300 cursor-pointer"
              >
                <div className="text-secondary">{service.icon}</div>
                <h3 className="text-xl text-white font-semibold ">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.desc}</p>
                <div className="border-1 border-secondary w-10 group-hover:w-16 transition-all duration-300" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
