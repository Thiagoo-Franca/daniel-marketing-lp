import { Reveal } from "../animations/Reveal";
import Post from "./post";

export default function Projetos() {
  return (
    <section className="bg-black flex flex-col py-8 md:py-12 px-2 md:px-0 ">
      <div className="max-w-7xl mx-auto w-full">
        <Reveal>
          <h5 className="text-white text-sm font-light">Portifólio</h5>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="flex flex-row items-center w-full gap-4 md:gap-8 justify-between">
            <h1 className="text-white text-2xl md:text-6xl font-bold">
              Projetos
            </h1>
            <p className="text-gray-400">
              Confira alguns dos nossos trabalhos mais recentes.
            </p>
          </div>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4  w-full max-w-7xl mx-auto mt-8 md:mt-12 px-2 md:px-0">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </section>
  );
}
