"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

interface ModalProjetosProps {
  onClose?: () => void;
  projeto_data: {
    title: string;
    description: string;
    images: string[];
  };
}

export default function ModalProjetos({
  onClose,
  projeto_data,
}: ModalProjetosProps) {
  const projeto = projeto_data;

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center">
      {
        // Overlay, fechar modal ao ser clicado
      }
      <div
        className="fixed inset-0  flex items-center justify-center bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative w-11/12 rounded-lg bg-primary md:w-3/4 rounded-lg">
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper h-[400px] w-full "
          style={
            {
              "--swiper-navigation-color": "var(--secondary)",
              "--swiper-pagination-color": "var(--secondary)",
            } as React.CSSProperties
          }
        >
          {projeto.images?.map((image, index) => (
            <SwiperSlide key={image}>
              <Image
                src={image}
                alt={`Imagem ${index + 1} do ${projeto.title}`}
                fill
                className="object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          aria-label="Fechar modal"
          className="group absolute right-4 top-4 z-50 h-8 w-8 hover:cursor-pointer"
          onClick={onClose}
        >
          <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white transition-colors duration-300 group-hover:bg-secondary" />

          <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white transition-colors duration-300 group-hover:bg-secondary" />
        </button>
        <div className="px-4 py-6">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-4xl">
            {projeto.title}
          </h2>

          <p className="text-gray-300 text-sm md:text-base">
            {projeto.description}
          </p>
        </div>
      </div>
    </section>
  );
}
