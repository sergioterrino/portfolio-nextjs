import AvatarPortfolio from "@/components/avatar-portfolio";
import AvatarTechnologies from "@/components/avatar-technologies";
import Container from "@/components/container";
import SliderTechnologies from "@/components/slider-technologies";
import { dataFrameworks, dataLanguages, dataTools } from "@/data";

const TechnologiesPage = () => {
  const allTechnologies = [...dataLanguages, ...dataFrameworks, ...dataTools];

  return (
    <Container>
       <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
          Mi Tech{' '}
          <span className="font-bold text-secondary">
            Stack
          </span>
        </h1>
      <div className="w-full py-12">
        <SliderTechnologies data={allTechnologies} />
      </div>
    </Container>
  );
}

export default TechnologiesPage;