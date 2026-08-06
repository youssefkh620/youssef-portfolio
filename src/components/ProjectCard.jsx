import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <>
      <div className="overflow-clip rounded-2xl bg-[#0F1D31] border border-[#38BDF8]/12 transition-transform hover:-translate-y-1.5 duration-300 group">
        <div className="relative">
          <img
            className="mb-6 group-hover:scale-103 duration-300 ease-in-out transition-transform"
            src={project.img}
            alt={project.title}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black to-transparent group-hover:scale-103 duration-300 ease-in-out transition-transform"></div>
          <span className="absolute px-2 py-0.75 bg-black/60 border border-[#38BDF8]/20 text-[#38BDF8] rounded-sm top-2.5 left-2.5">
            {project.id}
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-[20px] font-bold text-[#F8FAFC]">
            {project.title}
          </h3>

          <p className="mt-2.5 mb-4 text-[#94A3B8] text-[14px]">
            {project.desc}
          </p>

          <div className="flex gap-2 ">
            {project.tools.map((tool) => (
              <span
                className="py-0.5 px-2 rounded-sm bg-[#94A3B8]/8 border border-[#38BDF8]/12 text-xs text-[#94A3B8]"
                key={tool}
              >
                {tool}
              </span>
            ))}
          </div>
          <div className="flex gap-4 mt-5 items-end ">
            <Link
              to={"https://github.com/youssefkh620"}
              target="_blank"
              className="text-[#94A3B8] text-[13px] hover:text-[#38BDF8] font-semibold flex items-center gap-1.5 py-2.5 justify-center text-center w-full  border border-[#38BDF8]/12 hover:border-[#38BDF8] cursor-pointer rounded-xl duration-300 ease-in-out "
            >
              <IoLogoGithub /> Code
            </Link>
            <Link
              to={`/projectDetails/${project.id}`}
              className="font-semibold text-[#0F172A] text-[13px] flex items-center gap-1.5 py-2.5 justify-center text-center w-full bg-[#38BDF8] border border-[#38BDF8] rounded-xl duration-300 ease-in-out cursor-pointer hover:bg-[#2f9bc9]"
            >
              View Project <MdOutlineKeyboardDoubleArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
