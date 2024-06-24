import AvatarPortfolio from "@/components/avatar-portfolio";
import AvatarTechnologies from "@/components/avatar-technologies";
import Container from "@/components/container";
import SliderTechnologies from "@/components/slider-technologies";
import { dataFrameworks, dataLanguages, dataTools } from "@/data";

const TechnologiesPage = () => {
  return (
    <Container>
      {/* <AvatarServices /> */}
      <div className="grid items-center justify-center h-60 md:h-40 max-w-5xl gap-6 mx-auto md:grid-cols-2">
        <div className="max-w-[450px]">
          <p className="mb-3 m-auto text-3xl text-gray-300">Lenguajes de programación</p>
        </div>
        <div>
          <SliderTechnologies data={dataLanguages} />
        </div>
      </div>
      <div className="grid items-center justify-center h-60 md:h-40 max-w-5xl gap-6 mx-auto md:grid-cols-2">
        <div className="max-w-[450px]">
          <p className="mb-3 text-center md:text-left text-3xl text-gray-300">Frameworks</p>
        </div>
        <div>
          <SliderTechnologies data={dataFrameworks} />
        </div>
      </div>
      <div className="grid items-center justify-center h-60 md:h-40 max-w-5xl gap-6 mx-auto md:grid-cols-2">
        <div className="max-w-[450px]">
          <p className="mb-3 text-center md:text-left text-3xl text-gray-300">Tools</p>
        </div>
        <div>
          <SliderTechnologies data={dataTools} />
        </div>
      </div>
      <AvatarPortfolio />
    </Container>
  );
}

export default TechnologiesPage;