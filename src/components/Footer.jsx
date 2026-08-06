import { FaGithub } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { IoMailOpenOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-[#07111F] border border-t-[#38BDF8]/12 p-5 flex justify-between">
      <h1 className="text-cyan-400">
        &lt; <span className="text-white font-bold">Youssef Khaled</span> /&gt;
      </h1>

      <div className="flex items-center gap-4 text-[#94A3B8]">
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
      <p className="text-sm text-[#94A3B8]">
        © 2026<span className="font-extrabold"> Youssef Khaled. </span> All
        rights reserved.
      </p>
    </footer>
  );
}
