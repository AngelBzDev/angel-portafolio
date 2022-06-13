import { FC, PropsWithChildren } from "react";

interface Props {
  id?: string;
}

export const Section: FC<PropsWithChildren<Props>> = ({ children, id }) => {
  return (
    <section
      id={id}
      className="flex flex-col items-start justify-center w-full h-screen mx-auto md:max-w-5xl"
    >
      {children}
    </section>
  );
};
