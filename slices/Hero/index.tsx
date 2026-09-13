"use client";

import { FC, useEffect, useState } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useNav } from "@/hooks/useNav";
import Image from "next/image";
import ButtonWhatsApp from "@/components/ui/button-whatsapp";
import { Button } from "@/components/ui/button";
import { ArrowIcon } from "@/components/ui/icons";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  const SLIDES = slice.primary.background_image
    .filter((image) => isFilled.image(image.background_image))
    .map((image) => ({
      alt: image.background_image.alt ?? "Imagem do Hero",
      src: image.background_image.url,
    }));
  const [slideIndex, setSlideIndex] = useState(0);

  const nav = useNav();

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <section id="hero" className="relative w-full h-[calc(100vh-80px)]">
        {SLIDES.map((slide, index) => (
          <Image
            key={index}
            src={slide.src}
            alt={slide.alt}
            fill
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === slideIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute top-0 left-0 right-0 bg-black/50 w-full h-full flex flex-col  justify-center">
          <div className="flex flex-col  text-center w-full justify-center items-center">
            <div className="w-full max-w-7xl text-left flex flex-col gap-4 md:gap-8 px-4">
              <h5 className="text-gray-300 text-lg md:text-xl mb-2 md:mb-4">
                {slice.primary.listagem}
              </h5>
              <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight md:leading-tight max-w-3xl">
                {slice.primary.white_text}{" "}
                <span className="text-secondary">{slice.primary.red_text}</span>
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
    </section>
  );
};

export default Hero;
