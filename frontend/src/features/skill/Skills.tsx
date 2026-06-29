import { skillData } from "./SkillsData";
import { useTheme } from "../../context/ThemeContext";
import "./Skills.css";

const Skills = () => {
  const { isDark } = useTheme();

const SkillCard = ({ skill }: { skill: typeof skillData[0] }) => (
  <div className={`flex flex-col items-center gap-2 mx-3 px-5 py-4 rounded-2xl border transition-all duration-300 hover:scale-110 cursor-default shrink-0 w-24
    ${isDark
      ? "bg-zinc-900/80 border-zinc-700/50 text-zinc-300 hover:border-violet-500 hover:bg-zinc-800 shadow-lg shadow-black/30"
      : "bg-white/80 border-zinc-200 text-zinc-700 hover:border-violet-400 hover:bg-zinc-50 shadow-md shadow-zinc-200/50"
    }`}>
    <i className={`${skill.icon} text-3xl`} />
    <span className="text-xs font-medium text-center leading-tight">{skill.name}</span>
  </div>
);
  return (
    <section id="skills" className="py-12 md:py-24 overflow-hidden">
      <h1 className="text-center text-4xl font-bold mb-16">Skills</h1>

      {/* Row 1 — left */}
      <div className="marquee-wrapper mb-6">
        <div className="marquee-track">
          {[...skillData, ...skillData].map((skill, i) => (
            <SkillCard key={i} skill={skill} />
          ))}
        </div>
      </div>

      {/* Row 2 — right */}
      <div className="marquee-wrapper">
        <div className="marquee-track-reverse">
          {[...skillData, ...skillData].map((skill, i) => (
            <SkillCard key={i} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;