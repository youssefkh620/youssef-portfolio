import Typewriter from "typewriter-effect";
import heroImg from "../assets/heroImg.svg";
import { FaGithub, FaReact, FaMobileAlt } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { SlSocialLinkedin } from "react-icons/sl";
import reactImg from "../assets/reactImg.svg";
import tailwindImg from "../assets/tailwindImg.svg";
import { FaLaptopCode, FaGraduationCap } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { skillsContext } from "../context/SkillsContext";
import { Bold } from "lucide-react";
import { section } from "motion/react-client";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import ProjectCard from "../components/ProjectCard";
import { ProjectsContext } from "../context/ProjectsContext";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

function Links({ link, icon }) {
  return (
    <a
      className="inline-flex items-center justify-center p-2.5
  text-[#94A3B8]
  border border-[#38BDF8]/12
  bg-[#0F1D31] rounded-xl"
      href={link}
    >
      {icon}
    </a>
  );
}

function Hero() {
  return (
    <>
      <section className="h-screen pb-10 relative pt-20  flex items-center justify-between bg-[#07111F]  px-3 md:px-5">
        <div>
          <p className="mb-7 font-medium text-[13px] text-[#38BDF8] py-1.5 px-3.5 border border-[#38BDF8]/20 w-fit flex items-center gap-1.5 rounded-2xl bg-[#38BDF8]/10">
            <span className="flex w-1.5 h-1.5 bg-[#38BDF8] rounded-full"></span>{" "}
            Frontend Developer
          </p>
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "<span class='text-white font-black text-5xl '>Hi I'M </span> <br/><br/><span class='text-[#38BDF8] font-black text-5xl'>Youssef Khaled</span>",
                )
                .pauseFor(2000)
                .start();
            }}
          />
          <p className="mt-3 mb-5 text-3xl font-semibold text-[#94A3B8]">
            Building modern, responsive web experiences with React.
          </p>
          <p className="text-[#94A3B8]">
            I build clean, responsive and user-focused interfaces using modern
            frontend technologies.
          </p>
          <div className="flex gap-4 my-9 items-center ">
            <button className="w-full md:w-fit font-semibold  text-black bg-[#38BDF8] rounded-md py-3 px-6">
              View Projects
            </button>
            <button className="w-full md:w-fit font-semibold text-[#94A3B8] border border-[#38BDF8]/12 rounded-md py-3 px-6">
              Download CV{" "}
            </button>
          </div>
          <div className="flex items-center gap-4">
            <Links
              link={`https://github.com/youssefkh620`}
              icon={<FaGithub />}
            />
            <Links
              link={`https://www.linkedin.com/in/youssef-khaled-680923271/`}
              icon={<SlSocialLinkedin />}
            />
            <Links
              link={`https://youssefkh620@gmail.com`}
              icon={<IoMailOpenOutline />}
            />
          </div>
        </div>
        <div className="relative hidden md:flex">
          <img src={heroImg} alt="Hero Image" />
          <img className="absolute top-0 right-10" src={reactImg} />
          <img className="absolute bottom-13 lift-10" src={tailwindImg} />
        </div>
      </section>
    </>
  );
}

function About() {
  return (
    <>
      <section className="w-full bg-[#0B1628] px-4 md:px-5 py-16">
        <div className="my-8">
          <p className="text-[#38BDF8] font-semibold mb-3">ABOUT ME</p>
          <h1 className="text-[#F8FAFC] font-extrabold text-[28px]">
            Turning ideas into clean, functional interfaces.
          </h1>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="md:w-[35%] ">
            <div className="text-[#94A3B8] mb-8">
              I am Youssef Khaled, a Frontend Developer focused on building
              clean, responsive interfaces using React and modern web
              technologies.
              <br />
              <br />
              My approach centers on clarity, performance, and user experience,
              as I transform design concepts into meticulously crafted,
              accessible web applications.
            </div>
            <div>
              <Link
                to={"/about"}
                className="mb-3 w-fit md:w-fit font-semibold  text-black bg-[#38BDF8] rounded-md py-3 px-6"
              >
                More About Me
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col gap-4 w-full">
            <Focus
              title={"Field"}
              desc={"Information Systems"}
              icon={<FaGraduationCap />}
            />
            <Focus
              title={"Focus"}
              desc={"Frontend Development"}
              icon={<FaLaptopCode />}
            />
            <Focus
              title={"Primary Framework"}
              desc={"React.js "}
              icon={<FaReact />}
            />
            <Focus
              title={"Specialty"}
              desc={"Responsive Web Design"}
              icon={<FaMobileAlt />}
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Focus({ icon, title, desc }) {
  return (
    <div className="flex items-center gap-4 w-full bg-[#0F1D31] border border-[#38BDF8]/12 hover:border-[#38BDF8] rounded-xl py-4 px-5 duration-300 ease-in-out">
      <div className="text-[#D0D5DB] text-2xl">{icon}</div>
      <div>
        <h1 className="text-[#94A3B8] text-[14px]">{title}</h1>
        <p className="text-[#F8FAFC] font-semibold text-[15px]">{desc}</p>
      </div>
    </div>
  );
}

function SkillsSection() {
  const skills = useContext(skillsContext);

  return (
    <section className="px-4 md:px-5 py-16 bg-[#07111F]">
      <div className="mb-8 flex items-end  justify-between">
        <div>
          <h3 className="text-[#38BDF8] font-semibold mb-3">MY SKILLS</h3>
          <h1 className="text-[#F8FAFC] font-extrabold text-[28px]">
            Technologies I work with
          </h1>
        </div>
        <Link
          to={"/about"}
          className="text-[#38BDF8] flex items-center gap-1 hover:gap-2 duration-300 ease-in-out"
        >
          View All Skills <MdOutlineKeyboardDoubleArrowRight />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5  gap-4">
        {skills
          .filter((skill) => skill.category === "Frontend")
          .map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                className="flex flex-col items-center gap-3 py-5 px-4 rounded-xl bg-[#0F1D31] border border-[#38BDF8]/12 hover:border-[#38BDF8] duration-300 ease-in-out transform hover:-translate-y-1"
                key={skill.id}
              >
                <h1>
                  <Icon
                    style={{
                      color: skill.color,
                      fontSize: "30px",
                    }}
                  />
                </h1>
                <p className="font-bold text-white">{skill.name}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
}
function ProjectsSection() {
  const { projects } = useContext(ProjectsContext);
  return (
    <>
      <section className="bg-[#0B1628] py-10 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.slice(0, 3).map((pro) => (
            <ProjectCard key={pro.id} project={pro} />
          ))}
        </div>
      </section>
    </>
  );
}
function ContactSection() {
  return (
    <>
      <div className="mx-auto text-center flex flex-col items-center justify-between bg-[#07111F] py-10 px-5">
        <h3 className="text-xs font-semibold text-[#38BDF8] mb-3">
          GET IN TOUCH
        </h3>
        <h1 className="text-5xl font-extrabold text-[#F8FAFC] mb-4">
          Have a project or opportunity ?
        </h1>
        <p className="text-[#94A3B8]">Let's work together.</p>
        <Link
          to={`/contact`}
          className="font-semibold text-[#07111F] text-[13px]  py-2.5 px-10 mt-3 justify-center text-center w-fit bg-[#38BDF8] border border-[#38BDF8] rounded-xl duration-300 ease-in-out cursor-pointer hover:bg-[#2f9bc9]"
        >
          Contact Me
        </Link>
      </div>
    </>
  );
}
