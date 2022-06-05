import Image from "next/image";
import React, { FC } from "react";
import logo from "../../public/vercel.svg";
export const Navbar: FC = () => {
  const menuItems: string[] = ["sobre mí", "proyectos", "contáctame"];

  return (
    <nav className="py-5 px-12 flex justify-between items-center">
      <Image src={logo} alt="logo" height={40} />
      <div className="font-medium text-sm capitalize flex gap-8">
        {menuItems.map((item, i) => (
          <a key={item} className="hover:text-p-blue-2 cursor-pointer">
            <span className="mr-2 text-p-blue-2 font-semibold">{`0${
              i + 1
            }.`}</span>
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};
