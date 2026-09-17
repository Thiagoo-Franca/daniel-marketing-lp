import { Reveal } from "../animations/Reveal";
import SubtitleSections from "../ui/subtitle-sections";
import ServicesGrid from "./services-grid";

export default function Servicos() {
  return (
    <section
      id="servicos"
      className="bg-black flex flex-col py-8 md:py-12 px-2"
    >
      <div className="flex flex-col gap-4  w-full max-w-7xl mx-auto justify-between px-2 md:px-0 text-muted-foreground">
        <SubtitleSections subtitle="00:01 - O que eu faço" />
        <Reveal delay={0.1}>
          <h1 className="text-3xl md:text-5xl font-bold text-white text-left  max-w-sm mb-4">
            Serviços
          </h1>
        </Reveal>
        <ServicesGrid />
      </div>
    </section>
  );
}
