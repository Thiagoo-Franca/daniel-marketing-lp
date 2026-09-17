interface MenuHamburguerListItemsProps {
  link: { href: string; label: string };
  handleNavigation: (sectionId: string) => void;
}

export default function MenuHamburguerListItems({
  link,
  handleNavigation,
}: MenuHamburguerListItemsProps) {
  return (
    <li key={link.href}>
      <button
        type="button"
        onClick={() => handleNavigation(link.href)}
        className="transition-colors duration-300 hover:text-secondary hover:cursor-pointer"
      >
        {link.label}
      </button>
    </li>
  );
}
