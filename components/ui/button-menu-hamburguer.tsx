interface ButtonMenuHamburguerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function ButtonMenuHamburguer({
  open,
  setOpen,
}: ButtonMenuHamburguerProps) {
  return (
    <button
      onClick={() => setOpen(!open)}
      className={`md:hidden relative w-8 h-8 flex flex-col justify-self-end gap-1.5 group hover:cursor-pointer `}
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
  );
}
