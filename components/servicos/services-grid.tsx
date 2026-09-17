import { SERVICES } from "@/constants";
import ServicesCard from "./services-card";

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {SERVICES.map((service, index) => (
        <ServicesCard key={index} service={service} index={index} />
      ))}
    </div>
  );
}
