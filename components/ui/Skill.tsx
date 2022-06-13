import { FC } from "react";

interface Props {
  text: any;
  icon: any;
}

export const Skill: FC<Props> = ({ text, icon }) => {
  return (
    <div className="flex items-center justify-center p-4 font-medium transition-all rounded-lg md:justify-start bg-p-gray hover:text-p-purple hover:-translate-y-1">
      {icon}{" "}
      <span className="hidden ml-3 font-serif text-p-purple md:block">
        {text}
      </span>
    </div>
  );
};
