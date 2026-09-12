"use client";

import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "../ui/icons";

interface ButtonWhatsAppProps {
  className?: string;
}

export default function ButtonWhatsApp({ className }: ButtonWhatsAppProps) {
  const handleClick = () => {
    const phoneNumber = "73988277809";
    const message =
      "Olá! Gostaria de conhecer melhor o seu trabalho e saber como podemos trabalhar juntos.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <Button
      variant="outline"
      className={`flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white w-full rounded-none py-4 md:py-8 text-lg font-semibold hover:cursor-pointer ${className}`}
      onClick={handleClick}
    >
      <WhatsAppIcon />
      FALAR PELO WHATSAPP
    </Button>
  );
}
