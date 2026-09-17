import { Reveal } from "../animations/Reveal";

interface ServicesCardProps {
  service: {
    icon: React.ReactNode;
    title: string;
    desc: string;
  };
  index: number;
}

export default function ServicesCard({ service, index }: ServicesCardProps) {
  return (
    <Reveal key={index} delay={0.2 * index}>
      <div
        key={index}
        className="group bg-primary flex flex-col gap-4 p-6  rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
      >
        <div className="text-secondary">{service.icon}</div>
        <h3 className="text-xl text-white font-semibold ">{service.title}</h3>
        <p className="text-gray-400">{service.desc}</p>
        <div className="border-1 border-secondary w-10 group-hover:w-16 transition-all duration-300" />
      </div>
    </Reveal>
  );
}
