import React from "react";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactIcons = () => {
  return (
    <div className="w-full sm:w-[100%] md:w-[80%] lg:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 md:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center mx-auto">
      <img
        className="w-full h-48 md:h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="Profile Picture of Vaibhav More"
      />
      <div className="flex flex-col gap-4 text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-bold text-white">
          Vaibhav More
        </h3>
        <p className="text-base md:text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-sm md:text-base text-gray-400 tracking-wide">
          As a MERN Stack Developer, I specialize in building robust, scalable,
          and high-performance web applications using the MERN stack—MongoDB,
          Express.js, React.js, and Node.js...
        </p>
        <p className="text-sm md:text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lighText">+917378358956</span>
        </p>
        <p className="text-sm md:text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lighText">vaibhavmore75077@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4 text-center md:text-left">
          Find me in
        </h2>
        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="https://github.com/vaibhav540"
            target="_blank"
            className="bannerIcon"
            rel="noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/Vaibhavmore7378"
            target="_blank"
            rel="noreferrer"
            className="bannerIcon"
            aria-label="Twitter Profile"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/vaibhav-more-8b916124a/"
            target="_blank"
            rel="noreferrer"
            className="bannerIcon"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactIcons;
