import ProjectCard from "./ProjectCard";
import data from "@/lib/projects.json";

export default function Projects() {
  return (
    <div className="my-[3rem] grid gap-8">
      {data.projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          image={project.image}
        />
      ))}
    </div>
  );
}
