import AvatarPortfolio from "@/components/avatar-portfolio";
import Container from "@/components/container";
import PortfolioBox from "@/components/portfolio-box";
import { dataPortfolio } from "@/data";

const PortfolioPage = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center h-full mb-24">
        <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">Mis últimos <span className="font-bold text-secondary">trabajos realizados</span></h1>

        <div className="relative z-10 grid max-w-5xl gap-6 mx-0 sm:mx-4 md:mx-10 mt-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {dataPortfolio.map((data) => (
            <PortfolioBox key={data.id} data={data}/>
          ))}
        </div>
      </div>
      {/* <AvatarPortfolio /> */}
    </Container>
  );
}

export default PortfolioPage;