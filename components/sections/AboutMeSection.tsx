import Image from "next/image";

import { Section } from "../layouts";
import { TitleSeccion } from "../ui";

import io from "../../public/io.jpg";

export const AboutMeSection = () => {
  return (
    <Section id="sobre-mi">
      <div className="max-w-4xl mx-auto text-base">
        <TitleSeccion number={1} title={"sobre mi"} />
        <div className="block gap-10 md:flex">
          <div className="w-full md:w-3/4">
            <p className="mb-4">
              ¡Hola! Mi nombre es Ángel Báez y amo el desarrollo web..
            </p>
            <p className="mb-4">
              Mi historia es muy graciosa, ya que antes de entrar a la
              universidad quería ser arquitecto, pero por otros motivos (que
              agradezco mucho) empecé a estudiar la carrera de desarrollo y
              gestión de software y me enamore de ella.
            </p>
            <p className="mb-4">
              Siempre me gusta aprender tecnologías nuevas. Soy autodidacta,
              responsable, sé trabajar en equipo, sé trabajar bajo presión,
              además siempre busco cumplir con el objetivo.
            </p>
          </div>
          <div className="flex items-center w-56 p-2 mx-auto rounded-lg md:w-72 -z-20 ">
            <Image src={io} alt="Foto de Angel Baez" className="rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </Section>
  );
};
