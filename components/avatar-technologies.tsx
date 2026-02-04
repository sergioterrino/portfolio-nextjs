"use client"

import { useEffect, useState } from "react";
import MotionTransition from "./transition-component";

const AvatarTechnologies = () => {
  const [basePath, setBasePath] = useState('');
  
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hostname.includes('github.io')) {
      setBasePath('/portfolio-nextjs');
    }
  }, []);

  return (
    <MotionTransition position='right' className="bottom-0 left-0 hidden md:inline-block md:absolute">
      <img src={`${basePath}/images/tecnologies.png`} width="300" height="300" className="w-[350px] h-full " alt="Particles " />
    </MotionTransition>
  );
}

export default AvatarTechnologies;