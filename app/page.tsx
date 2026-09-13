import CallToAction from "@/components/callToAction";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projetos from "@/components/projetos";
import QuemSomos from "@/components/quem-somos";
import Servicos from "@/components/servicos";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";

export default async function Home() {
  const client = createClient();
  const home = await client.getSingle("home");
  return (
    <>
      <Header />
      <Hero />
      <Servicos />
      <QuemSomos />
      <Projetos />
      <CallToAction />

      <SliceZone slices={home.data.slices} components={components} />
    </>
  );
}
