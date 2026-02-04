"use client"

import { useEffect, useState } from "react";
import MotionTransition from "./transition-component";

const AvatarPortfolio = () => {
  const [basePath, setBasePath] = useState('');
  
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hostname.includes('github.io')) {
      setBasePath('/portfolio-nextjs');
    }
  }, []);

  return (
    <MotionTransition position='bottom' className="bottom-0 left-0 hidden md:inline-block md:absolute ">
      <img src={`${basePath}/images/avatar3.png`} width="300" height="300" className="w-full h-full " alt="Avatar portfolio" />
    </MotionTransition>
  );
}

export default AvatarPortfolio;