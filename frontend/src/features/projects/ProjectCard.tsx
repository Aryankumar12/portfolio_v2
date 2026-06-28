import Button from "../../components/Button";
import { useTheme } from "../../context/ThemeContext";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveDemoUrl: string;
  image: string;
}

interface Object {
  obj: Project;
}

const ProjectCard = ({ obj }: Object) => {
  const { isDark } = useTheme();

  return (
    <div className={`flex flex-col justify-between text-center border p-6 max-w-md w-full rounded-lg shadow-sm h-full transition-colors duration-300
      ${isDark
        ? "bg-zinc-900 border-zinc-700 text-white"
        : "bg-white border-zinc-200 text-zinc-900"
      }`}>
      <img src={obj.image} alt={obj.title} className="w-full h-56 object-cover rounded-md mb-4" />
      <h2 className="font-bold text-2xl my-2">{obj.title}</h2>
      <p className={`my-2 text-sm ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>{obj.description}</p>
      <div className="flex flex-wrap justify-center gap-2 my-4">
        {obj.techStack.map((y) => (
          <span key={y} className={`text-xs px-2.5 py-1 rounded-full font-medium
            ${isDark ? "bg-zinc-800 text-zinc-300" : "bg-zinc-100 text-zinc-700"}`}>
            {y}
          </span>
        ))}
      </div>
      <div className="flex justify-center items-center gap-2 my-2">
        <Button href={obj.githubUrl}>GitHub URL</Button>
        <Button href={obj.liveDemoUrl}>Live Demo</Button>
      </div>
    </div>
  );
};

export default ProjectCard;