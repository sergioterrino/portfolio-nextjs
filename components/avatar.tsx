"use client"

import Image from "next/image";
import MotionTransition from "./transition-component";

const Avatar = () => {
  return ( 
    <MotionTransition position="top" className="bottom-0 right-0 hidden md:inline-block md:absolute">
      <Image src="/images/avatar-1.png" alt="About me picture" width={300} height={300} className="w-full h-full "/>
    </MotionTransition>
   );
}
 
export default Avatar;