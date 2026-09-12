import { Reveal } from "../animations/Reveal";
import ButtonWhatsApp from "../ui/button-whatsapp";

export default function CallToAction() {
  return (
    <section
      id="call-to-action"
      className="relative w-full bg-cover bg-center bg-no-repeat py-16 md:py-32"
      style={{
        backgroundImage: "url('/assets/callToActionImage.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <Reveal>
        <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center justify-center gap-4 px-4 text-center">
          <Reveal delay={0.15}>
            <h2 className="mb-2 md:mb-4 max-w-md text-5xl font-bold text-white leading-tight md:text-7xl">
              Vamos transformar sua ideia em{" "}
              <span className="text-secondary">conteúdo?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-gray-400 mb-8 max-w-md md:max-w-xl">
              Entre em contato conosco hoje mesmo e descubra como podemos ajudar
              sua empresa a alcançar novos patamares de sucesso online.
            </p>
          </Reveal>
          <Reveal delay={0.45}>
            <ButtonWhatsApp className="px-12" />
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
}
