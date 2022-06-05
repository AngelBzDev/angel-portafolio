import React, { FC, PropsWithChildren } from "react";

import Head from "next/head";

import { Navbar } from "../ui";

export const MainLayout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Angel Baez</title>
        <meta name="author" content="Angel Baez" />
        <meta
          name="description"
          content="Bienvenido a mi portafolio web, Soy Angel Baez y soy desarrollador web"
        />
        <meta
          name="keywords"
          content="portafolio, angel, baez, desarrollador, desarrollo web, web, desarrollo, developer"
        />
      </Head>
      <Navbar />
      {children}
    </>
  );
};
