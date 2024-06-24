"use client"

import Image from 'next/image'
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
  return (
    <div className='z-20 w-full bg-darkBg/60'>
      <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
        <Image src="/images/avatar2.png" priority alt='profile picture' width="450" height="450"
          className='mx-auto pt-4' />
        <div className="flex flex-col justify-center max-w-lg">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Si puedes pensarlo,
            <TypeAnimation
              sequence={[
                'puedes programarlo', 1000,
                'puedes optimizarlo', 1000,
                'puedes implementarlo', 1000,
                'puedes desarrollarlo', 1000
              ]}
              repeat={Infinity}
              wrapper="span"
              className='block font-bold text-4xl text-secondary'
            />
          </h1>
          <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8 w-128">
            Soy <span className='font-bold'>desarrollador Full Stack</span> jr.<br/>
            Transformo ideas en realidad digital.
            También estoy comenzando a crear contenido en redes, pues ya saben lo que dicen:&nbsp;  
            <span className='font-bold'>&quot;Uno enseña, dos aprenden&quot;</span>. <br />
          </p>
          <div className="flex item-center justify-center gap-7 md:justify-start md:gap-10 mb-8 sm:mb-0">
            <Link href="/portfolio"
              className='font-bold text-lg text-center p-4 transition-all w-fit border-2 rounded-full hover:shadow-lg 
              hover:shadow-white/50 cursor-pointer'>
              Ver proyectos
            </Link>
            <Link href="https://www.linkedin.com/in/sergioterrino/" target="_blank"
              className='font-bold text-lg text-center text-secondary p-4 transition-all w-fit border-2 border-secondary 
              rounded-full hover:shadow-lg hover:shadow-secondary cursor-pointer'>
              Contacta conmigo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;