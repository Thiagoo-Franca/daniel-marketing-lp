import CallToAction from "@/components/callToAction";
import Projetos from "@/components/projetos";
import QuemSomos from "@/components/quem-somos";
import Servicos from "@/components/servicos";

export default function Home() {
  return (
    <section className="">
      <Servicos />
      <QuemSomos />
      <Projetos />
      <CallToAction />
    </section>
  );
}
