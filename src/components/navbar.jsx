import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo1 from '../assets/sd.jpg'
function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/Portfolio" aria-label="Home">
          <img src={logo1} alt="Logo" width={100} height={100} className="rounded-full"/>
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/satadip-debnath-a98285253/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/SatadipIITG11"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/_satadip_11/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
