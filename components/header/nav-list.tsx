interface LinkProps {
  links: { href: string; label: string }[];
  handleNavigation: (sectionId: string) => void;
}

export default function NavList({ links, handleNavigation }: LinkProps) {
  return (
    <nav className={`hidden md:flex`}>
      <ul className="flex gap-4 md:gap-8">
        {links.map((link) => (
          <li key={link.href}>
            <button
              type="button"
              onClick={() => handleNavigation(link.href)}
              className="transition-colors duration-300 hover:text-secondary hover:cursor-pointer hover:underline  hover:underline-offset-4 font-semibold text-white"
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
