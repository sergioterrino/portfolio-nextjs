import Image from "next/image";
import MotionTransition from "./transition-component";

const AvatarPortfolio = () => {
  return (
    <MotionTransition position='bottom' className="bottom-0 left-0 hidden md:inline-block md:absolute ">
      <Image src="/images/avatar3.png" width="300" height="300" className="w-full h-full " alt="Avatar portfolio" />
    </MotionTransition>
  );
}

export default AvatarPortfolio;