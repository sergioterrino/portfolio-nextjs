import CoverParticles from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sergio Terrino - Portfolio Web</title>
        <meta name="title" content="Sergio Terrino - Portfolio Web" />
        <meta name="description" content="Portfolio Web made by Sergio Terrino - Desarrollador y Programador Web y Móvil" />
        <meta name="image" content="https://github.com/user-attachments/assets/7a0738ee-e4aa-4b4c-bf2d-7cc0bde1ccd1" />
        <meta name="title" property="og:title" content="Sergio Terrino - Portfolio Web" />
        <meta name="description" property="og:description" content="Portfolio Web made by Sergio Terrino - Desarrollador y Programador Web y Móvil" />
        <meta property="og:url" content="https://stb-portfolio.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta name="image" property="og:image" content="https://github.com/user-attachments/assets/7a0738ee-e4aa-4b4c-bf2d-7cc0bde1ccd1" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sergio Terrino - Portfolio Web" />
        <meta name="twitter:description" content="Portfolio Web made by Sergio Terrino - Desarrollador y Programador Web y Móvil" />
        <meta name="twitter:image" content="https://github.com/user-attachments/assets/7a0738ee-e4aa-4b4c-bf2d-7cc0bde1ccd1" />
        <meta name="author" content="[Sergio Terrino Brea"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <TransitionPage/> por si quiero una transicion de la página */}
        <div className="flex min-h-[100vh] h-full bg-no-repaeat bg-gradient-cover">
          <CoverParticles />
          <Introduction />
        </div>
      </main>
    </>
  );
}
