import { Section } from "../layouts";
import { Skill } from "../ui";
import { TitleSeccion } from "../ui";

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiRedux,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiPhp,
  SiGithub,
} from "react-icons/si";

export const SkillsSection = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={"2.5rem"} /> },
    { name: "CSS", icon: <FaCss3Alt size={"2.5rem"} /> },
    { name: "JavaScript", icon: <SiJavascript size={"2.5rem"} /> },
    { name: "React JS", icon: <FaReact size={"2.5rem"} /> },
    { name: "Node JS", icon: <FaNodeJs size={"2.5rem"} /> },
    { name: "Next JS", icon: <SiNextdotjs size={"2.5rem"} /> },
    { name: "Redux", icon: <SiRedux size={"2.5rem"} /> },
    { name: "MySQL", icon: <SiMysql size={"2.5rem"} /> },
    { name: "Mongo DB", icon: <SiMongodb size={"2.5rem"} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={"2.5rem"} /> },
    { name: "PHP", icon: <SiPhp size={"2.5rem"} /> },
    { name: "Git / Github", icon: <SiGithub size={"2.5rem"} /> },
  ];

  return (
    <Section id="skills">
      <div className="w-full max-w-4xl mx-auto text-base ">
        <TitleSeccion number={2} title={"mis skills"} />
        <div className="grid grid-cols-3 overflow-y-visible md:grid-cols-4 gap-7">
          {skills.map(({ name, icon }) => (
            <Skill key={name} text={name} icon={icon} />
          ))}
        </div>
      </div>
    </Section>
  );
};
