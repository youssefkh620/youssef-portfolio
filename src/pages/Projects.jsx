import { useContext } from "react";
import { ProjectsContext } from "../context/ProjectsContext";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const { projects } = useContext(ProjectsContext);

  return (
    <>
      <div className="py-20 bg-radial-[at_50%_99%] from-[#091828] to-[#07111F] to-60% border border-b-[#38BDF8]/12">
        <div className="mx-auto w-[90%] text-center md:w-1/2 flex flex-col items-center justify-between">
          <h3 className="text-xs font-semibold text-[#38BDF8] mb-3">
            FEATURED PROJECTS
          </h3>
          <h1 className="text-5xl font-extrabold text-[#F8FAFC] mb-4">
            Things I've built
          </h1>
          <p className="text-[#94A3B8]">
            Things I've built while learning and developing my frontend skills.
          </p>
        </div>
      </div>
      <section className="bg-[#07111F] py-10 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((pro) => (
            <ProjectCard key={pro.id} project={pro} />
          ))}
        </div>
      </section>
    </>
  );
}
