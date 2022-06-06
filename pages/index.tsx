import type { NextPage } from "next";
import { MainLayout } from "../components/layouts/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <main className="px-36">
        <section className="flex flex-col items-start justify-center max-w-5xl mx-auto screen">
          <div>
            <p className="mb-8 text-base text-p-purple">Hola, mi nombre es</p>
            <h1 className="font-extrabold text-7xl">Ángel Baez</h1>
            <h2 className="mt-5 text-6xl font-bold capitalize text-p-blue-2">
              Y soy desarrollador web
            </h2>
            <p className="mt-6 text-xl">
              Soy un Ingeniro en Desarrollo y Gestión de software
            </p>
          </div>
        </section>
      </main>
    </MainLayout>
  );
};

export default Home;
