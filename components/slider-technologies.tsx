"use client"

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SliderTechnologies = ({ data }: { data: any[] }) => {
  return (
    // <Swiper
    //   breakpoints={
    //     {
    //       320: {
    //         slidesPerView: 1,
    //         spaceBetween: 15
    //       },
    //       768: {
    //         slidesPerView: 2,
    //         spaceBetween: 15
    //       },
    //       1024: {
    //         slidesPerView: 3,
    //         spaceBetween: 15
    //       }
    //     }
    //   }
    //   freeMode={true}
    //   // pagination={{ clickable: true }}
    //   // modules={[Pagination]}
    //   // className="h-[280px] md:h-[340px] w-[270px] md:w-[550px]"
    //   className="h-[50%] md:h-[80%] w-[50%] md:w-[90%] sm:w-[200px] flex justify-center items-center"

    //   autoplay={{
    //     delay: 1000,
    //     disableOnInteraction: false, // when user click on slider then autoplay wont stop
    //   }}
    //   speed={2000}
    //   loop={true}
    //   modules={[Autoplay]}
    // >
    //   {data.map((item: any, index: any) => (
    //     <SwiperSlide key={index} >
    //       <div className="flex px-6 py-8 rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)] sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-secondary border-2">
    //         <Image src={"/images" + item.src} width={100} height={100} className="m-auto h-20" alt="logo of tech" />
    //       </div>
    //     </SwiperSlide>
    //   ))}

    // </Swiper>

    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 15
        }
      }}
      freeMode={true}
      autoplay={{
        delay: 500,
        disableOnInteraction: false,
      }}
      loop={true}
      speed={2000}
      modules={[Autoplay]}
      className="h-[280px] md:h-[150px] w-[270px] md:w-[350px] xl:w-[450px]"
    >

      {data.map((item, index) => (
        <SwiperSlide key={index} >
          <div className="flex px-6 py-8 h-auto md:h-[150px] rounded-lg mask-gradient-techs cursor-pointer bg-[rgba(65,47,123,0.15)] 
          sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 ">
            <div className="mb-0 m-auto text-secondary">
              <Image src={"/images" + item.src} width={100} height={100} className="m-auto h-20" alt={item.title} />
              <div className="absolute top-12 right-0 w-full text-center text-lg bg-black bg-opacity-70 text-white font-bold py-3 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {item.title}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SliderTechnologies;