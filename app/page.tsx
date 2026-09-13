import Header from "@/components/header";
import Projetos from "@/components/projetos";
import Servicos from "@/components/servicos";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";

export default async function Home() {
  const client = createClient();
  const home = await client.getSingle("home");

  const projetos = await client.getAllByType("projeto");

  return (
    <>
      <Header />
      <SliceZone
        slices={home.data.slices.filter((slice) => slice.slice_type === "hero")}
        components={components}
      />
      <Servicos />
      <Projetos projetos={projetos} />
      <SliceZone
        slices={home.data.slices.filter((slice) => slice.slice_type !== "hero")}
        components={components}
      />
    </>
  );
}
