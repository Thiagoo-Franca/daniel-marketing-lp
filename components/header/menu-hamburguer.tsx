import { motion } from "motion/react";
import MenuHamburguerItems from "./menu-hamburguer-list";

interface MenuHamburguerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  links: { href: string; label: string }[];
  handleNavigation: (sectionId: string) => void;
}

export default function MenuHamburguer({
  open,
  setOpen,
  links,
  handleNavigation,
}: MenuHamburguerProps) {
  if (!open) {
    return null;
  }
  return (
    <>
      <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="absolute top-full left-0 right-0 z-50 bg-black/90 py-4 backdrop-blur-md md:py-8"
      >
        <MenuHamburguerItems
          links={links}
          handleNavigation={handleNavigation}
        />
      </motion.div>
    </>
  );
}
