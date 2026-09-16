"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import { Content, isFilled } from "@prismicio/client";
import { useEffect } from "react";

interface ModalProjetosProps {
  onClose?: () => void;
  projeto_data: Content.ProjetoDocument;
}

export default function ModalProjetos({
  onClose,
  projeto_data,
}: ModalProjetosProps) {
  // fechar projeto ao clicar ESC
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0  flex items-center justify-center bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative w-11/12 rounded-lg bg-primary md:max-w-5xl rounded-lg">
        {projeto_data.data.video_cloudinary ? (
          <video
            src={projeto_data.data.video_cloudinary}
            controls
            autoPlay
            loop
            playsInline
            className="w-full h-full object-cover md:max-h-[70vh] controls-list"
          />
        ) : (
          <Swiper
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper aspect-[3/4] md:aspect-[9/16] w-full md:max-h-[70vh]"
            style={
              {
                "--swiper-navigation-color": "var(--secondary)",
                "--swiper-pagination-color": "var(--secondary)",
              } as React.CSSProperties
            }
          >
            {projeto_data.data.foto?.map(
              (foto, index) =>
                isFilled.image(foto.foto) && (
                  <SwiperSlide key={index}>
                    <Image
                      src={foto.foto.url}
                      alt={
                        foto.foto.alt ??
                        `Imagem ${index + 1} de ${projeto_data.data.titulo}`
                      }
                      fill
                      className="object-cover"
                    />
                  </SwiperSlide>
                ),
            )}
          </Swiper>
        )}
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
            {projeto_data.data.titulo}
          </h2>

          <p className="text-gray-300 text-sm text-justify md:text-base">
            {projeto_data.data.descricao}
          </p>
        </div>
      </div>
    </section>
  );
}
