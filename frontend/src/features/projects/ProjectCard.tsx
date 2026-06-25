import { projectData } from "./ProjectData";
import Button from "../../components/Button";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveDemoUrl: string;
}
interface Object {
  obj: Project;
}
const ProjectCard = ({ obj }: Object) => {
  return (
    <div className="flex flex-col justify-between text-center border-2 p-6 max-w-md w-full bg-gray-100 rounded-lg shadow-sm h-full">
      <h2 className=" font-bold text-2xl my-2">{obj.title}</h2>
      <p className="my-2">{obj.description}</p>
      <div className="flex flex-wrap justify-center gap-2 my-4">
        {obj.techStack.map((y) => {
          return <p className="bg-zinc-200 text-zinc-800 text-xs px-2.5 py-1 rounded-full font-medium">{y}</p>;
        })}
      </div>
      <div className="flex justify-center items-center gap-2 my-2">
        <Button href={obj.githubUrl}>GitHub URL</Button>
        <Button href={obj.liveDemoUrl}>Live Demo</Button>
      </div>
    </div>
  );
};

export default ProjectCard;
