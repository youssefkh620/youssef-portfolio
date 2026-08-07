import {
  FaGraduationCap,
  FaLaptopCode,
  FaReact,
  FaMobileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="py-20 bg-radial-[at_50%_99%] from-[#091828] to-[#07111F] to-60% border border-b-[#38BDF8]/12">
        <div className="mx-auto w-[90%] text-center md:w-[80%] flex flex-col items-center justify-between">
          <h3 className="text-xs font-semibold text-[#38BDF8] mb-3">
            ABOUT ME
          </h3>
          <h1 className="text-5xl font-extrabold text-[#F8FAFC] mb-4">
            More about my journey as a Frontend Developer.
          </h1>
        </div>
      </div>
      {/*-------------------------------------------------------------------*/}
      <section className="w-full bg-[#0B1628] px-4 md:px-5 py-16">
        <div className="my-8">
          <p className="text-[#38BDF8] font-semibold mb-3">INTRODUCTION</p>
          <h1 className="text-[#F8FAFC] font-extrabold text-[28px]">
            Turning ideas into clean, functional interfaces.
          </h1>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="md:w-[35%] mb-4">
            <div className="text-[#94A3B8] mb-8">
              I'm Youssef Khaled, a frontend developer focused on building
              clean, responsive interfaces. My interest in React.js and modern
              web development drove me to build real projects — from e-commerce
              UIs to movie discovery apps.
              <br />
              <br />
              I'm currently studying Information Systems at Obour Institutes,
              where I continue developing my understanding of software systems
              and digital product design.
            </div>
            <div>
              <Link
                to={"/about"}
                className="mb-3 w-fit md:w-fit font-semibold  text-black bg-[#38BDF8] rounded-md py-3 px-6"
              >
                Contact Me
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
      {/*-------------------------- Time Line Section --------------------------*/}
      <TimeLine />
      {/*-------------------------- Time Line Section --------------------------*/}
      <div className="mx-auto text-center flex flex-col items-center justify-between bg-[#0B1628] py-10 px-5">
        <h3 className="text-xs font-semibold text-[#38BDF8] mb-3">
          GET IN TOUCH
        </h3>
        <h1 className="text-5xl font-extrabold text-[#F8FAFC] mb-4">
          Let's build something together.
        </h1>
        <p className="text-[#94A3B8]">
          Have a project, opportunity, or idea? I'd love to hear from you.
        </p>
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

function TimeLine() {
  const timeline = [
    {
      year: "2022",
      title: "Started University",
      description: "Started studying Information Systems.",
    },
    {
      year: "2025",
      title: "ITI Certificate",
      description: "Earned a certificate in Web Design Using Python from ITI.",
    },
    {
      year: "2026",
      title: "Graduation",
      description: "Graduated with a Bachelor's degree in Information Systems.",
    },
  ];
  return (
    <>
      <section className="py-20 px-5 bg-[#07111F]">
        <h2 className="mb-12 text-[#38BDF8] text-sm font-bold">EDUCATION</h2>
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 w-1 h-full bg-linear-180 from-[#38BDF8]  to-transparent md:left-1/2 md:-translate-x-1/2" />
          {timeline.map((item, index) => (
            <div
              key={index}
              className="relative mb-12 flex items-start md:even:flex-row-reverse"
            >
              <div className="ml-10 w-full rounded-2xl border border-[#38BDF8]/12 bg-[#0F1D31] p-5 md:ml-0 md:w-[45%]">
                <span className="text-sm font-semibold text-sky-400">
                  {item.year}
                </span>
                <h3 className="mt-1 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-400">{item.description}</p>
              </div>
              <div className="absolute left-4 top-5 h-3 w-3 -translate-x-1/2 rounded-full bg-[#38BDF8] ring-4 ring-[#38BDF8]/12 md:left-1/2"></div>
            </div>
          ))}
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
