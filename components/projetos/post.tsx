import { ArrowIcon } from "../ui/icons";

interface PostProps {
  onClick?: () => void;
  projeto_data?: {
    title: string;
    description: string;
    images: string[];
  };
}

export default function Post({ onClick, projeto_data }: PostProps) {
  return (
    <div
      className="group relative w-full bg-cover bg-center bg-no-repeat rounded-lg py-24 md:py-32 cursor-pointer hover:scale-102 transition-transform duration-300"
      style={{
        backgroundImage: `url('${projeto_data?.images[0]}')`,
      }}
      onClick={onClick}
    >
      <div className="bg-secondary w-6 h-6 md:w-10 md:h-10 rounded-full flex items-center justify-center absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <ArrowIcon />
      </div>
      <div className="absolute bottom-4 left-4 md:opacity-0 group-hover:opacity-100 transition-all duration-300">
        <h2 className="text-xl font-bold text-secondary">
          {projeto_data?.title}
        </h2>
        <p className="text-gray-400 text-sm text-white">
          {projeto_data?.description}
        </p>
      </div>
    </div>
  );
}
