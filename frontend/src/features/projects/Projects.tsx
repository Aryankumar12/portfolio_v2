import ProjectCard from "./ProjectCard"
import { projectData } from "./ProjectData"
const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-20">
        <h1 className="text-center text-4xl  py-10">Projects</h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch justify-items-center max-w-5xl mx-auto">


            {
                projectData.map((x )=>{
                    return (
                        
                        <ProjectCard   key={x.title} obj = {x}/>
                    )
                })
            }
        </div>

    </section>
  )
}

export default Projects