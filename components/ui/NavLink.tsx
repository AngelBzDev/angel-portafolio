import { FC } from "react";
import Link from "next/link";

interface Props {
  item: any;
  i: number;
}

export const NavLink: FC<Props> = ({ item, i }) => {
  return (
    <Link href={item.href}>
      <a className="cursor-pointer hover:text-p-purple">
        <span className="mr-2 font-semibold text-p-purple">{`0${i + 1}.`}</span>
        {item.text}
      </a>
    </Link>
  );
};
