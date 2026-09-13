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

  console.log(
    home.data.slices.map((slice) => ({
      type: slice.slice_type,
      variation: slice.variation,
    })),
  );
  return (
    <>
      <Header />
      <Hero />
      <Servicos />
      <QuemSomos />
      <Projetos />
      <SliceZone slices={home.data.slices} components={components} />
    </>
  );
}
