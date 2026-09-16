interface LogoProps {
  handleNavigation?: (sectionId: string) => void;
}
export default function Logo({ handleNavigation }: LogoProps) {
  return (
    <div
      className="text-md md:text-2xl font-bold text-white hover:cursor-pointer"
      onClick={() => (handleNavigation ? handleNavigation("hero") : null)}
    >
      DANIEL <span className="text-secondary">MARKETING</span>
    </div>
  );
}
