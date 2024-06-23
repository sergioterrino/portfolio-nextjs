import AvatarTechnologies from "@/components/avatar-technologies";
import Container from "@/components/container";
import SliderTechnologies from "@/components/slider-technologies";
import { dataFrameworks, dataLanguages, dataTools } from "@/data";

const TechnologiesPage = () => {
  return (
    // <Container>
    //   {/* <div>
    //     <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mi stack <span className="font-bold text-secondary"> tecnológico</span></h1>
    //   </div> */}
    //   <div className="grid items-center justify-center h-auto my-4 max-w-5xl gap-6 mx-auto md:grid-cols-2">
    //     <div className="max-w-[450px]">
    //       <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Lenguajes de programación</h1>
    //     </div>
    //     <div>
    //       <SliderTechnologies data={languagesData} />
    //     </div>
    //   </div>
    //   <div className="grid items-center justify-center h-auto my-4 max-w-5xl gap-6 mx-auto md:grid-cols-2">
    //     <div className="max-w-[450px]">
    //       <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Frameworks</h1>
    //     </div>
    //     <div>
    //       <SliderTechnologies data={frameworksData} />
    //     </div>
    //   </div>
    //   <div className="grid items-center justify-center h-auto my-4 max-w-5xl gap-6 mx-auto md:grid-cols-2">
    //     <div className="max-w-[450px]">
    //       <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Tools</h1>
    //     </div>
    //     <div>
    //       <SliderTechnologies data={dataTools} />
    //     </div>
    //   </div>
    //   {/* <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button> */}
    //   {/* <AvatarTechnologies /> */}
    // </Container>

    <Container>
      {/* <AvatarServices /> */}
      <div className="grid items-center justify-center h-60 md:h-40 max-w-5xl gap-6 mx-auto md:grid-cols-2">
        <div className="max-w-[450px]">
          <p className="mb-3 ml-10 text-3xl text-gray-300">Lenguajes de programación</p>
        </div>
        <div>
          <SliderTechnologies data={dataLanguages} />
        </div>
      </div>
      <div className="grid items-center justify-center h-60 md:h-40 max-w-5xl gap-6 mx-auto md:grid-cols-2">
        <div className="max-w-[450px]">
          <p className="mb-3 ml-10 text-3xl text-gray-300">Frameworks</p>
        </div>
        <div>
          <SliderTechnologies data={dataFrameworks} />
        </div>
      </div>
      <div className="grid items-center justify-center h-60 md:h-40 max-w-5xl gap-6 mx-auto md:grid-cols-2">
        <div className="max-w-[450px]">
          <p className="mb-3 ml-10 text-3xl text-gray-300">Tools</p>
        </div>
        <div>
          <SliderTechnologies data={dataTools} />
        </div>
      </div>
    </Container>
  );
}

export default TechnologiesPage;