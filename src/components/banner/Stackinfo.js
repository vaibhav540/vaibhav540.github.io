import React from "react";
import {
  FaAngular,
  FaGithub,
  FaLinkedinIn,
  FaReact,
  FaTwitter,
  FaNodeJs,
  FaJs,
} from "react-icons/fa";
import { SiFigma, SiTailwindcss } from "react-icons/si";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Stackinfo = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder💻.",
      "Full Stack Developer💻.",
      "UI Designer💻.",
      "Web Developer💻.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 20,
    delaySpeed: 3000,
  });

  return (
    <div
      id="first-box"
      className="w-full md:w-1/2 flex flex-col gap-10 md:gap-20"
    >
      <div className="flex flex-col gap-5">
        <h4 className="text-sm md:text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Hi I'm{" "}
          <span className="text-designColor capitalize">Vaibhav More</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          a<span> {text}</span>
          <Cursor cursorBlinking="true" cursorStyle="|" cursorColor="#ff014f" />
        </h2>

        <p className="text-sm md:text-base font-bodyFont leading-6 tracking-wide">
          I am a passionate and skilled developer. With a strong foundation in
          software development principles, I am dedicated to creating efficient,
          scalable, and user-friendly solutions. I thrive in collaborative
          environments and enjoy taking on new challenges.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0">
        <div>
          <h2 className="text-sm md:text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a
                href="https://github.com/vaibhav540"
                target="_blank"
                className="bannerIcon"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                className="bannerIcon"
                href="https://x.com/Vaibhavmore7378"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                className="bannerIcon"
                href="https://www.linkedin.com/in/vaibhav-more-8b916124a/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-sm md:text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
              >
                <FaJs />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://legacy.reactjs.org/docs/getting-started.html"
                target="_blank"
                rel="noreferrer"
              >
                <FaReact />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://nodejs.org/docs/latest/api/"
                target="_blank"
                rel="noreferrer"
              >
                <FaNodeJs />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://help.figma.com/hc/en-us"
                target="_blank"
                rel="noreferrer"
              >
                <SiFigma />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stackinfo;
