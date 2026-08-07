import { FaGithub } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { IoMailOpenOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-[#07111F] border border-t-[#38BDF8]/12 p-5 grid grid-cols-2 lg:grid-cols-3 items-center">
      <h1 className="text-cyan-400">
        &lt; <span className="text-white font-bold">Youssef Khaled</span> /&gt;
      </h1>

      <div className="flex items-center gap-4 text-[#94A3B8] justify-end lg:justify-center ">
        <a
          href="https://github.com/youssefkh620"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/youssef-khaled-680923271/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlSocialLinkedin />
        </a>

        <a href="mailto:yousefkh620@gmail.com">
          <IoMailOpenOutline />
        </a>
      </div>
      <p className="text-sm text-[#94A3B8]  lg:text-end col-span-2 lg:col-span-1 mt-2 lg:mt-0">
        © 2026<span className="font-extrabold"> Youssef Khaled. </span> All
        rights reserved.
      </p>
    </footer>
  );
}
