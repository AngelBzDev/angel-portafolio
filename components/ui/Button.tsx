import { FC } from "react";

interface Props {
  text: string;
}

export const Button: FC<Props> = ({ text }) => {
  return (
    <button className="w-40 py-3 font-serif font-medium border rounded px-7 bg-none border-p-purple text-p-purple hover:bg-p-purple hover:bg-opacity-10">
      {text}
    </button>
  );
};
