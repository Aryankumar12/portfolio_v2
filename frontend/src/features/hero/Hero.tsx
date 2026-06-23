import Button from "../../components/Button";
import type { HeroData } from "../../types/hero";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  function handleResumeClick(): void {
    alert("hellow i clieck");
  }
  function handleContactClick(): void {
    alert("haha");
  }

  const heroData: HeroData = {
    name: "Aryan Kumar",
    role: `Software Engineer | Full Stack Developer `,
    introduction:
      "Computer Science graduate building scalable web applications with React, TypeScript and Node.js.",
  };
  return (
    <>
      <div className=" flex bg-amber-200 justify-center items-center flex-col min-h-screen text-center gap-6 px-4">
        <div className="hero_content flex justify-center flex-col items-center  space-y-4">
          <h1 className="text-4xl md:text-6xl  font-bold tracking-tight">
            {heroData.name}
          </h1>
          <p className="text-lg md:text-2xl">{heroData.role}</p>
          <p className="text-base md:text-xl text-zinc-600 text-center max-w-xl">
            {heroData.introduction}
          </p>
        </div>

        <div className="hero_buttons flex gap-6  flex-wrap justify-center">
          <Button onClick={handleResumeClick}>Resume</Button>
          <Button onClick={handleContactClick}>Contact</Button>
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
