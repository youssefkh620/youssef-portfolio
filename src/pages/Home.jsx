import Typewriter from "typewriter-effect";
import heroImg from "../assets/heroImg.svg";
import { FaGithub } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { SlSocialLinkedin } from "react-icons/sl";
import reactImg from "../assets/reactImg.svg";
import tailwindImg from "../assets/tailwindImg.svg";
export default function Home() {
  return (
    <>
      <section className="h-screen relative pt-20  flex items-center justify-between bg-[#07111F]  px-3 md:px-5">
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
