import type { NextPage } from "next";
import { MainLayout } from "../components/layouts";
import {
  AboutMeSection,
  PrimarySection,
  SkillsSection,
} from "../components/sections";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <PrimarySection />
      <AboutMeSection />
      <SkillsSection />
    </MainLayout>
  );
};

export default Home;
