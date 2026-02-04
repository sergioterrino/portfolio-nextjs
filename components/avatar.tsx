"use client"

import { useEffect, useState } from "react";
import MotionTransition from "./transition-component";

const Avatar = () => {
  const [basePath, setBasePath] = useState('');
  
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hostname.includes('github.io')) {
      setBasePath('/portfolio-nextjs');
    }
  }, []);

  return ( 
    <MotionTransition position="top" className="bottom-0 right-0 hidden lg:inline-block lg:absolute">
      <img src={`${basePath}/images/avatar1.png`} alt="About me picture" width={250} height={250} className="w-full h-full max-w-sm"/>
    </MotionTransition>
   );
}
 
export default Avatar;