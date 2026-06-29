import Button from "../../components/Button";
import type { HeroData } from "../../types/hero";
import { FaEnvelope, FaGithub, FaLinkedin, FaRegFile } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

function Hero() {
  const { isDark } = useTheme();

  const heroData: HeroData = {
    name: "Aryan Kumar",
    role: `Software Engineer | Full Stack Developer`,
    introduction:
      "Computer Science graduate building scalable web applications with React, TypeScript and Node.js.",
  };

  return (
  <div className="flex justify-center items-center flex-col py-10 md:py-32 text-center gap-6 px-4">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          {heroData.name}
        </h1>
        <p className="text-lg md:text-2xl font-medium">{heroData.role}</p>
        {/* ✅ text color responds to dark mode */}
        <p
          className={`text-sm md:text-lg text-center max-w-xs md:max-w-xl
          ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
        >
          {heroData.introduction}
        </p>
      </div>

      {/* ✅ 2x2 grid on mobile, single row on desktop */}
      {/* ✅ equal width buttons on mobile */}
      <div className="grid grid-cols-2 md:flex gap-3 md:gap-6 w-full max-w-xs md:max-w-none md:w-auto">
        <Button
          href="https://drive.google.com/file/d/13f5-2DPu4LJAoKHuLmIBtuTw8uu0OcNg/view?usp=sharing"
          target="_blank"
          className="justify-center"
        >
          <FaRegFile /> Resume
        </Button>
        <Button href="#contact" className="justify-center">
          <FaEnvelope /> Contact
        </Button>
        <Button
          href="https://github.com/Aryankumar12"
          target="_blank"
          className="justify-center"
        >
          <FaGithub /> Github
        </Button>
        <Button
          href="https://www.linkedin.com/in/aryankumar26/"
          target="_blank"
          className="justify-center"
        >
          <FaLinkedin /> Linkedin
        </Button>
      </div>
    </div>
  );
}

export default Hero;
