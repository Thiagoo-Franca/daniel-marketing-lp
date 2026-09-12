import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "../ui/icons";

interface ButtonWhatsAppProps {
  className?: string;
}

export default function ButtonWhatsApp({ className }: ButtonWhatsAppProps) {
  return (
    <Button
      variant="outline"
      className={`flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white w-full rounded-none py-4 md:py-8 text-lg font-semibold hover:cursor-pointer ${className}`}
    >
      <WhatsAppIcon />
      FALAR PELO WHATSAPP
    </Button>
  );
}
