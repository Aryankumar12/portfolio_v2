import Button from "../../components/Button";
import type { HeroData } from "../../types/hero";
import { FaEnvelope, FaGithub, FaLinkedin, FaRegFile } from "react-icons/fa";

function Hero() {

  const heroData: HeroData = {
    name: "Aryan Kumar",
    role: `Software Engineer | Full Stack Developer `,
    introduction:
      "Computer Science graduate building scalable web applications with React, TypeScript and Node.js.",
  };
  return (
    <>
      <div className="flex  justify-center items-center flex-col py-16 md:py-32 text-center gap-6 px-4">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-4xl md:text-6xl  font-bold tracking-tight">
            {heroData.name}
          </h1>
          <p className="text-lg md:text-2xl">{heroData.role}</p>
          <p className="text-base md:text-xl text-zinc-600 text-center max-w-xl">
            {heroData.introduction}
          </p>
        </div>

        <div className=" flex gap-3 md:gap-6 flex-wrap justify-center">
          <Button href="https://drive.google.com/file/d/13f5-2DPu4LJAoKHuLmIBtuTw8uu0OcNg/view?usp=sharing" target="_blank"> <FaRegFile/> Resume</Button>
          <Button  href="#contact" >  <FaEnvelope/> Contact</Button>
          <Button href="https://github.com/Aryankumar12" target="_blank">
            <FaGithub />
            Github
          </Button>
          <Button
            href="https://www.linkedin.com/in/aryankumar26/"
            target="_blank" >
            <FaLinkedin /> 
            Linkedin
          </Button>
        </div>
      </div>
    </>
  );
}

export default Hero;
