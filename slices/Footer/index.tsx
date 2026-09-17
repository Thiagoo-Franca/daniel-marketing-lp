import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Footer`.
 */
export type FooterProps = SliceComponentProps<Content.FooterSlice>;

/**
 * Component for "Footer" Slices.
 */
const Footer: FC<FooterProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <footer className="bg-black w-full py-8 md:py-24">
        <div className="flex flex-col  gap-4 w-full max-w-7xl mx-auto justify-between px-2">
          <section className="flex flex-col md:flex-row  gap-4 w-full max-w-7xl mx-auto justify-between px-2">
            <div>
              <h5 className="text-md md:text-2xl font-bold text-foreground">
                DANIEL <span className="text-secondary">MARKETING</span>
              </h5>
              <p className="text-muted-foreground">{slice.primary.frase}</p>
            </div>
            <div>
              <h5 className="text-sm md:text-md font-normal text-muted-foreground">
                CONTATO
              </h5>
              <p className="text-muted-foreground">
                WhatsApp: {slice.primary.whatsapp}
              </p>
              <p className="text-muted-foreground">
                E-mail:
                {slice.primary.email}
              </p>
            </div>
            <div>
              <h5 className="text-sm md:text-md font-normal text-muted-foreground">
                REDES SOCIAIS
              </h5>
              <PrismicLink
                className="text-muted-foreground hover:text-muted-foreground/80"
                field={slice.primary.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                instagram
              </PrismicLink>
            </div>
          </section>
          <section className="flex flex-col md:flex-row w-full max-w-7xl mx-auto justify-between px-2 text-center text-muted-foreground/60 text-sm gap-2 mt-4">
            <p>
              &copy; {new Date().getFullYear()} Daniel Marketing. Todos os
              direitos reservados.
            </p>
            <p>
              Desenvolvido por{" "}
              <a
                className="text-secondary hover:text-gray-300"
                href="https://github.com/Thiagoo-Franca"
                target="_blank"
                rel="noopener noreferrer"
              >
                Thiago Oliveira França
              </a>
            </p>
          </section>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
