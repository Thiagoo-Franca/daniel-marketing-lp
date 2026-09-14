import { useNav } from "@/hooks/useNav";
import { motion } from "motion/react";

interface MenuHamburguerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const links = [
  { href: "servicos", label: "Serviços" },
  { href: "projetos", label: "Projetos" },
  { href: "sobre-mim", label: "Sobre mim" },
  { href: "call-to-action", label: "Contato" },
];

export default function MenuHamburguer({ open, setOpen }: MenuHamburguerProps) {
  const nav = useNav();

  const handleNavigation = (sectionId: string) => {
    nav(sectionId);
    setOpen(false);
  };

  return (
    <>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 z-50 bg-black/90 py-4 backdrop-blur-md md:py-8"
          >
            <ul className="flex flex-col items-center justify-center gap-4 text-lg font-semibold text-white md:gap-8 md:text-xl">
              {links.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNavigation(link.href)}
                    className="transition-colors duration-300 hover:text-secondary hover:cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </>
      )}
    </>
  );
}
