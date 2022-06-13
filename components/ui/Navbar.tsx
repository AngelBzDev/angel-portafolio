import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { NavLink } from "./NavLink";
import logo from "../../public/logo.svg";
import { IoMenu, IoClose } from "react-icons/io5";

import { useMediaQuery } from "react-responsive";

export const Navbar: FC = () => {
  const [scroll, setScroll] = useState("top-0");
  const [open, setOpen] = useState(false);

  const menuItems = [
    { text: "sobre mí", href: "#sobre-mi" },
    { text: "skills", href: "#skills" },
    { text: "proyectos", href: "#proyectos" },
    { text: "contáctame", href: "#contactame" },
  ];

  let ubiPrincipal = typeof window === "undefined" ? 0 : window.scrollY;

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      let desplazamientoActual =
        typeof window === "undefined" ? 0 : window.scrollY;
      if (ubiPrincipal >= desplazamientoActual) {
        setScroll("top-0");
      } else {
        setScroll("-top-20");
      }
      ubiPrincipal = desplazamientoActual;
    });
  }

  const handleOpenNav = () => setOpen(!open);

  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

  const handleCloseMenu = () => {
    setOpen(false)
  }

  return (
    <nav
      className={`fixed items-center justify-between w-full h-20 md:h-24 px-5 md:px-12 transition-all flex ${scroll} bg-p-background ease-in-out`}
    >
      <Image src={logo} alt="logo" />
      <button
        onClick={handleOpenNav}
        className="block md:hidden transition-all"
      >
        {!open ? <IoMenu size={"2.5rem"} /> : <IoClose size={"2.5rem"} />}
      </button>
      {!isTablet ? (
        open && (
          <div
            className={`gap-8 font-serif text-sm font-medium capitalize flex-col flex bg-p-gray absolute  top-20 md:w-auto w-3/4 right-0 rounded-lg p-9 justify-evenly items-center screen`}
            onClick={handleCloseMenu}
          >
            {menuItems.map((item, i) => (
              <NavLink item={item} i={i} key={i}/>
            ))}
          </div>
        )
      ) : (
        <div
          className={`gap-8 font-serif text-sm font-medium capitalize flex items-center transition-all ease-in-out`}
        >
          {menuItems.map((item, i) => (
            <NavLink item={item} i={i} key={i} />
          ))}
        </div>
      )}
    </nav>
  );
};
