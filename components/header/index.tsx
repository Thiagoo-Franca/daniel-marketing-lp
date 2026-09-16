"use client";

import { useScroll } from "@/hooks/useScroll";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import MenuHamburguer from "./menu-hamburguer";
import { useNav } from "@/hooks/useNav";
import { LINKS } from "@/constants";
import Logo from "../ui/logo";
import NavList from "./nav-list";
import ButtonMenuHamburguer from "../ui/button-menu-hamburguer";

function getBackgroundColor(isScrolled: boolean, open: boolean) {
  if (isScrolled || open) {
    return "bg-black";
  } else {
    return "backdrop-blur-[2px]";
  }
}

export default function Header() {
  const [open, setOpen] = useState(false);

  const isScrolled = useScroll();
  const nav = useNav();

  const handleNavigation = (sectionId: string) => {
    nav(sectionId);
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${getBackgroundColor(isScrolled, open)}   transition-colors duration-300`}
    >
      <div className="flex items-center justify-between w-full max-w-7xl px-2 py-6 mx-auto">
        <Logo handleNavigation={handleNavigation} />

        <NavList handleNavigation={handleNavigation} links={LINKS} />

        <ButtonMenuHamburguer open={open} setOpen={setOpen} />

        {
          // div to maintain spacing between the logo and the menu button when the nav list is hidden on mobile
        }
        <div className="hidden md:block" />
      </div>

      <AnimatePresence>
        <MenuHamburguer
          handleNavigation={handleNavigation}
          open={open}
          setOpen={setOpen}
          links={LINKS}
        />
      </AnimatePresence>
    </header>
  );
}
