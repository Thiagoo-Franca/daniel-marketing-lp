import Header from "@/components/header";
import Projetos from "@/components/projetos";
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
      data: slice.primary,
    })),
  );

  return (
    <>
      <Header />
      <SliceZone
        slices={home.data.slices.filter((slice) => slice.slice_type === "hero")}
        components={components}
      />
      <Servicos />
      <Projetos />
      <SliceZone
        slices={home.data.slices.filter((slice) => slice.slice_type !== "hero")}
        components={components}
      />
    </>
  );
}
