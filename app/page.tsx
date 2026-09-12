import CallToAction from "@/components/callToAction";
import Hero from "@/components/hero";
import Projetos from "@/components/projetos";
import QuemSomos from "@/components/quem-somos";
import Servicos from "@/components/servicos";

export default function Home() {
  return (
    <>
      <Hero />
      <Servicos />
      <QuemSomos />
      <Projetos />
      <CallToAction />
    </>
  );
}
