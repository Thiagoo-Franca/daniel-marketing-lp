import MenuHamburguerListItems from "./menu-hamburguer-list-items";

interface MenuHamburguerProps {
  links: { href: string; label: string }[];
  handleNavigation: (sectionId: string) => void;
}

export default function MenuHamburguerItems({
  links,
  handleNavigation,
}: MenuHamburguerProps) {
  return (
    <ul className="flex flex-col items-center justify-center gap-4 text-lg font-semibold text-foreground md:gap-8 md:text-xl">
      {links.map((link) => (
        <MenuHamburguerListItems
          key={link.href}
          link={link}
          handleNavigation={handleNavigation}
        />
      ))}
    </ul>
  );
}
