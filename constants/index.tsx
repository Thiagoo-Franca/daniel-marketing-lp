import {
  CameraIcon,
  PhoneIcon,
  TableIcon,
  VideoIcon,
} from "@/components/ui/icons";

export const LINKS = [
  { href: "servicos", label: "Serviços" },
  { href: "projetos", label: "Projetos" },
  { href: "sobre-mim", label: "Sobre mim" },
  { href: "call-to-action", label: "Contato" },
];

export const SERVICES = [
  {
    icon: <CameraIcon />,
    title: "Fotografia",
    desc: "Cobertura fotográfica profissional de eventos, retratos, produtos e campanhas. Cada frame conta uma história que converte.",
  },
  {
    icon: <VideoIcon />,
    title: "Vídeo",
    desc: "Produção audiovisual cinematográfica para campanhas, eventos, reels e conteúdos que param o scroll e geram resultado.",
  },
  {
    icon: <PhoneIcon />,
    title: "Social Media",
    desc: "Estratégia e produção de conteúdo para Instagram, TikTok e YouTube. Feed que vende, stories que engajam.",
  },
  {
    icon: <TableIcon />,
    title: "Marketing",
    desc: "Planejamento estratégico de marca, identidade visual e campanhas que posicionam seu negócio acima da concorrência.",
  },
];
