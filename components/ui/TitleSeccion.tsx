import { FC } from "react";

interface Props {
  title: string;
  number: number;
}

export const TitleSeccion: FC<Props> = ({ title, number }) => {
  return (
    <div className="flex items-center mb-7">
      <span className="mr-3 font-serif text-xl font-normal text-p-purple">
        0{number}.
      </span>
      <h2
        className={`text-2xl font-extrabold flex items-center md:after:w-72 after:w-40 after:h-px after:content-[''] after:bg-p-purple mr-3 after:ml-3 capitalize`}
      >
        {title}
      </h2>
    </div>
  );
};
