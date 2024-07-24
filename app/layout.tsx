import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";

//importamos swiperJs
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Head from "next/head";

// Todo lo que esté en layout se compartirá en todas las páginas de la aplicación.

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sergio Terrino - Portfolio Web",
  description: "Portfolio Web made by Sergio Terrino - Desarrollador y Programador Web con 2 años de experiencia",
};

// En el layout se pone el header y el footer de la página. Ya que estos elementos se repiten en todas las páginas.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Sergio Terrino - Portfolio Web</title>
        <meta name="description" content="Portfolio Web made by Sergio Terrino - Desarrollador y Programador Web y Móvil" />
        <meta property="og:title" content="Sergio Terrino - Portfolio Web" />
        <meta property="og:description" content="Portfolio Web made by Sergio Terrino - Desarrollador y Programador Web y Móvil" />
        <meta property="og:url" content="https://stb-portfolio.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="../public/images/projects/portfolio.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tu Portfolio" />
        <meta name="twitter:description" content="App & Mobile Developer" />
        <meta name="twitter:image" content="../public/images/projects/portfolio.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={urbanist.className}>
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
