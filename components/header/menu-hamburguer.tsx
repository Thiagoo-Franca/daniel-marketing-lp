import { motion } from "motion/react";

interface MenuHamburguerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const links = [
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#call-to-action", label: "Contato" },
];

export default function MenuHamburguer({ open, setOpen }: MenuHamburguerProps) {
  return (
    <>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="z-50 absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md py-4 md:py-8 "
          >
            <ul className="flex flex-col gap-4 md:gap-8 items-center justify-center text-white text-lg md:text-xl font-semibold">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="hover:text-secondary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </>
      )}
    </>
  );
}
