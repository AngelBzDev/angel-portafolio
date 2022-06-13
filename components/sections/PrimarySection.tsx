import React, { FC } from "react";
import { Section } from "../layouts";
import { Button } from "../ui";

export const PrimarySection: FC = () => {
  return (
    <Section>
      <p className="mb-8 font-serif text-lg font-medium text-p-purple">
        Hola, mi nombre es
      </p>
      <h1 className="text-5xl font-black md:text-7xl">Ángel Baez</h1>
      <h2 className="mt-5 text-4xl font-extrabold capitalize md:text-6xl text-p-purple">
        Y soy desarrollador web
      </h2>
      <p className="max-w-lg mt-6 mb-12 text-base font-medium">
        Soy un Ingeniro en Desarrollo y Gestión de software Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Nisi natus impedit atque id quis
        nulla nesciunt totam accusamus
      </p>
      <Button text="Ver CV" />
    </Section>
  );
};
