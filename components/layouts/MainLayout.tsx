import React, { FC, PropsWithChildren } from "react";

import Head from "next/head";

import { Navbar } from "../ui";
import { SocialSection } from "../sections";

export const MainLayout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Angel Baez</title>
        <meta name="author" content="Angel Baez" />
        <link rel="shortcut icon" href="/public/favicon.ico.png" />
        <meta
          name="description"
          content="Bienvenido a mi portafolio web, Soy Angel Baez y soy desarrollador web"
        />
        <meta
          name="keywords"
          content="portafolio, angel, baez, desarrollador, desarrollo web, web, desarrollo, developer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        ></link>
      </Head>
      <Navbar />
      <SocialSection />
      <main className="w-full px-5 md:px-36 scroll-smooth">{children}</main>
    </>
  );
};
