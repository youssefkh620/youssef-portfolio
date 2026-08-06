import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const menuToogle = function () {
    setMenu((prev) => !prev);
  };
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    function handelScroll() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", handelScroll);
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full flex items-center justify-between px-3 md:px-5 transition-all duration-300 ${
        scrolled
          ? "bg-[#07111F]/90 backdrop-blur-md shadow-lg py-3"
          : "bg-[#07111F] py-5"
      }`}
    >
      <div>
        <h1 className="text-cyan-400">
          &lt; <span className="text-white font-bold">Youssef Khaled</span>{" "}
          /&gt;
        </h1>
      </div>
      <ul className="hidden md:flex gap-4 items-center">
        <NavLink to={"/"} className="relative flex flex-col items-center ">
          {({ isActive }) => (
            <>
              <span className={isActive ? "text-[#38BDF8]" : "text-[#94A3B8]"}>
                Home
              </span>

              {isActive && (
                <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-cyan-400 "></span>
              )}
            </>
          )}
        </NavLink>
        <NavLink to={"/about"} className="relative flex flex-col items-center">
          {({ isActive }) => (
            <>
              <span className={isActive ? "text-[#38BDF8]" : "text-[#94A3B8]"}>
                About
              </span>
              {isActive && (
                <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-cyan-400 "></span>
              )}
            </>
          )}
        </NavLink>
        <NavLink
          to={"/projects"}
          className="relative flex flex-col items-center"
        >
          {({ isActive }) => (
            <>
              <span className={isActive ? "text-[#38BDF8]" : "text-[#94A3B8]"}>
                Projects
              </span>
              {isActive && (
                <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-cyan-400"></span>
              )}
            </>
          )}
        </NavLink>
        <NavLink
          to={"/contact"}
          className="relative flex flex-col items-center"
        >
          {({ isActive }) => (
            <>
              <span className={isActive ? "text-[#38BDF8]" : "text-[#94A3B8]"}>
                Contact
              </span>
              {isActive && (
                <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-cyan-400"></span>
              )}
            </>
          )}
        </NavLink>
        <span className="inline w-0.5 h-4 bg-[#0D2639]"></span>
        <a
          href="https://github.com/youssefkh620"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <FaGithub size={20} className="text-[#94A3B8] " />
        </a>
      </ul>
      <div className="md:hidden">
        <button
          onClick={menuToogle}
          className={`transition-transform ${menu ? "rotate-90" : "rotate-0"} hover:cursor-pointer text-[#94A3B8]`}
        >
          {menu ? <X /> : <Menu />}
        </button>
        {menu && (
          <ul className="flex items-start flex-col gap-4 absolute w-full left-0 top-17 py-5 px-3 bg-[#0B1628] opacity-90 backdrop-blur-xs rounded-b-xl">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-[#38BDF8] border-b border-[#102A41] pb-4 w-full"
                  : "text-[#94A3B8]"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? "text-[#38BDF8] border-b border-[#102A41] pb-4 w-full"
                  : "text-[#94A3B8]"
              }
            >
              About
            </NavLink>
            <NavLink
              to={"/projects"}
              className={({ isActive }) =>
                isActive
                  ? "text-[#38BDF8] border-b border-[#102A41] pb-4 w-full"
                  : "text-[#94A3B8]"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive ? "text-[#38BDF8] " : "text-[#94A3B8]"
              }
            >
              Contact
            </NavLink>

            <a
              href="https://github.com/youssefkh620"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#94A3B8] py-3 border-t border-[#102A41] pb-4 w-full"
            >
              <FaGithub size={20} /> GitHub
            </a>
          </ul>
        )}
      </div>
    </nav>
  );
}
