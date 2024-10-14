import React, { useEffect, useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  const customStyle = {
    backgroundColor: "#121212",
    color: "#FFFFFF",
    padding: "16px",
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Aşağı kaydırırken başlığı gizle
      } else {
        setIsVisible(true); // Yukarı kaydırırken başlığı göster
      }
      setLastScrollY(window.scrollY); // Son kaydırma konumunu güncelle
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed w-full z-10 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        style={{ zIndex: -1 }}
      >
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="hidden sm:flex sm:items-center space-x-8 text-2xl font-semibold text-white">
              <Link to="home" smooth={true} duration={500} className="cursor-pointer group relative">
                Home&nbsp;/&gt;
                <span className="absolute left-0 -bottom-1 w-0 h-1 bg-indigo-600 transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link to="project" smooth={true} duration={500} className="cursor-pointer group relative">
                Project&nbsp;/&gt;
                <span className="absolute left-0 -bottom-1 w-0 h-1 bg-indigo-600 transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link to="skill" smooth={true} duration={500} className="cursor-pointer group relative">
                Skills&nbsp;/&gt;
                <span className="absolute left-0 -bottom-1 w-0 h-1 bg-indigo-600 transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link to="about" smooth={true} duration={500} className="cursor-pointer group relative">
                About&nbsp;/&gt;
                <span className="absolute left-0 -bottom-1 w-0 h-1 bg-indigo-600 transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link to="contact" smooth={true} duration={500} className="cursor-pointer group relative">
                Contact&nbsp;/&gt;
                <span className="absolute left-0 -bottom-1 w-0 h-1 bg-indigo-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a href="https://www.instagram.com/burcuuklntr/?hl=tr" target="_blank" rel="noreferrer">
              <FaInstagram className="text-white hover:text-indigo-600 text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/burcu-k-253219107/" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-white hover:text-indigo-600 text-2xl" />
            </a>
            <a href="https://github.com/burcuklntr?tab=repositories" target="_blank" rel="noreferrer">
              <FaGithub className="text-white hover:text-indigo-600 text-2xl" />
            </a>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-expanded="false"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={ !isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12" }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="home" smooth={true} duration={500} className="block cursor-pointer">
              Home&nbsp;/&gt;
            </Link>
            <Link to="project" smooth={true} duration={500} className="block cursor-pointer">
              Project&nbsp;/&gt;
            </Link>
            <Link to="skill" smooth={true} duration={500} className="block cursor-pointer">
              Skills&nbsp;/&gt;
            </Link>
            <Link to="about" smooth={true} duration={500} className="block cursor-pointer">
              About&nbsp;/&gt;
            </Link>
            <Link to="contact" smooth={true} duration={500} className="block cursor-pointer">
              Contact&nbsp;/&gt;
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
