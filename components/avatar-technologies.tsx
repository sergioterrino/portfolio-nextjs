import Image from "next/image";
import MotionTransition from "./transition-component";

const AvatarTechnologies = () => {
  return (
    <MotionTransition position='right' className="bottom-0 left-0 hidden md:inline-block md:absolute">
      <Image src="/images/tecnologies.png" width="300" height="300" className="w-[350px] h-full " alt="Particles " />
    </MotionTransition>
  );
}

export default AvatarTechnologies;