"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ButtonWhatsApp from "../ui/button-whatsapp";
import { Button } from "@/components/ui/button";
import { ArrowIcon } from "../ui/icons";
import { useNav } from "@/hooks/useNav";

const slides = [
  {
    alt: "Imagem 1",
    src: "/assets/hero1.jpg",
  },
  {
    alt: "Imagem 2",
    src: "/assets/hero2.jpg",
  },
  {
    alt: "Imagem 3",
    src: "/assets/hero3.jpg",
  },
];

export default function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);

  const nav = useNav();

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative w-full h-[calc(100vh-80px)]">
      <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden">
        <div className="relative w-full h-[calc(100vh-80px)]">
          {slides.map((slide, index) => (
            <Image
              key={index}
              src={slide.src}
              alt={slide.alt}
              fill
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === slideIndex ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 bg-black/50 w-full h-full flex flex-col  justify-center">
        <div className="flex flex-col  text-center w-full justify-center items-center">
          <div className="w-full max-w-7xl text-left flex flex-col gap-4 md:gap-8 px-4">
            <h5 className="text-gray-300 text-lg md:text-xl mb-2 md:mb-4">
              Marketing - Fotos - Vídeos - Edição de Vídeos - Criação de
              Conteúdo
            </h5>
            <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight md:leading-tight max-w-3xl">
              Transforme sua presença online com{" "}
              <span className="text-secondary">Marketing Digital</span>
            </h1>

            <div className="flex flex-col md:flex-row gap-4 mt-8 ">
              <ButtonWhatsApp className="border-none w-full md:max-w-sm hover:scale-102 transition-transform duration-300" />
              <Button
                onClick={() => nav("projetos")}
                className="border-none w-full md:max-w-sm h-12 md:h-16 bg-black/50 hover:bg-black/90 text-white rounded-none text-lg font-semibold hover:cursor-pointer hover:scale-102 transition-transform duration-300 flex items-center justify-center gap-2"
              >
                Veja nosso portfólio
                <ArrowIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
