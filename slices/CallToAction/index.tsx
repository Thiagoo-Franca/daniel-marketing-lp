import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Reveal } from "@/components/animations/Reveal";
import ButtonWhatsApp from "@/components/ui/button-whatsapp";

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction: FC<CallToActionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <section
        id="call-to-action"
        className="relative w-full bg-cover bg-center bg-no-repeat py-16 md:py-32"
        style={{
          backgroundImage: `url(${slice.primary.background_image.url})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <Reveal>
          <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-2 text-center">
            <Reveal delay={0.15}>
              <h2 className="mb-2 md:mb-4 max-w-xl text-5xl font-bold text-foreground leading-tight md:text-7xl">
                {slice.primary.frase_chamada}{" "}
                <span className="text-secondary">{slice.primary.red_text}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="w-full text-md md:text-lg text-muted-foreground mb-8 max-w-md md:max-w-2xl">
                {slice.primary.paragraph}
              </p>
            </Reveal>
            <Reveal delay={0.45}>
              <ButtonWhatsApp className="px-12 hover:scale-[1.02]" />
            </Reveal>
          </div>
        </Reveal>
      </section>
    </section>
  );
};

export default CallToAction;
