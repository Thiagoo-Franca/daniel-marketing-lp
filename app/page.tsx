import CallToAction from "@/components/callToAction";
import QuemSomos from "@/components/quem-somos";
import Servicos from "@/components/servicos";

export default function Home() {
  return (
    <section className="">
      <Servicos />
      <QuemSomos />
      <CallToAction />
    </section>
  );
}
