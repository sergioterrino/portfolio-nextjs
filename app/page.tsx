import CoverParticles from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <main>
      {/* <TransitionPage/> por si quiero una transicion de la página */}
      <div className="flex min-h-[100vh] h-full bg-no-repaeat bg-gradient-cover">
        <CoverParticles/>
        <Introduction/>
      </div>
    </main>
  );
}
