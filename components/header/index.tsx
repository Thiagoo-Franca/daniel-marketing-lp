"use client";

import { useScroll } from "@/hooks/useScroll";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import MenuHamburguer from "./menu-hamburguer";

export default function Header() {
  const [open, setOpen] = useState(false);
  const IsScrolled = useScroll();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${IsScrolled || open ? "bg-black" : "bg-transparent"} transition-colors duration-300`}
    >
      <div className="flex items-center justify-between w-full max-w-7xl px-2 py-6 mx-auto">
        <a href="#" className="text-md md:text-2xl font-bold text-white">
          DANIEL<span className="text-secondary"> MARKETING</span>
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="relative w-8 h-8 flex flex-col justify-center gap-1.5 group hover:cursor-pointer "
          aria-label="Menu"
        >
          <span
            className={`block h-px bg-white transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block h-px bg-white transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`block h-px bg-white transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        <MenuHamburguer open={open} setOpen={setOpen} />
      </AnimatePresence>
    </header>
  );
}
