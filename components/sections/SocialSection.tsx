import { FC } from "react";
import Link from "next/link";

import { FiGithub, FiLinkedin } from "react-icons/fi";

export const SocialSection: FC = () => {
  const list = [
    {
      name: "github",
      url: "https://github.com/AngelBzDev",
      icon: <FiGithub size={23} />,
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/angel-baez-99918620b/",
      icon: <FiLinkedin size={23} />,
    },
  ];

  return (
    <aside className="fixed z-50 flex-col justify-end hidden h-screen pl-12 md:flex ">
      <ul className="after:content-[''] after:w-px after:h-24 after:block after:mx-auto after:bg-p-purple">
        {list.map((red) => (
          <li
            key={red.name}
            className="mb-6 transition-transform hover:text-p-purple hover:-translate-y-1"
          >
            <Link href={red.url}>
              <a target={"_blank"}>{red.icon}</a>
            </Link>{" "}
          </li>
        ))}
      </ul>
    </aside>
  );
};
