import { Reveal } from "../animations/Reveal";

interface SubtitleSectionsProps {
  subtitle: string;
  className?: string;
}

export default function SubtitleSections({
  subtitle,
  className,
}: SubtitleSectionsProps) {
  return (
    <Reveal>
      <h5
        className={`font-mono font-semibold uppercase tracking-widest text-sm md:text-lg text-left ${className}`}
      >
        {subtitle}
      </h5>
    </Reveal>
  );
}
