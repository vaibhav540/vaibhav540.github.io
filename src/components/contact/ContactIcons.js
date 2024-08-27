import React from "react";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactIcons = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Vaibhav More</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          As a MERN Stack Developer, I specialize in building robust, scalable,
          and high-performance web applications using the MERN stack—MongoDB,
          Express.js, React.js, and Node.js. With a deep understanding of
          front-end and back-end technologies, I excel in creating seamless user
          experiences and efficient server-side logic. My expertise includes
          designing RESTful APIs, implementing responsive UI/UX with React,
          managing databases with MongoDB, and leveraging Node.js for
          server-side scripting. I thrive in dynamic environments, am passionate
          about continuous learning, and am committed to delivering cutting-edge
          solutions that meet modern web development standards.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lighText">+917378358956</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lighText">vaibhavmore75077@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://github.com/vaibhav540"
            target="_blank"
            className="bannerIcon"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            className="bannerIcon"
            href="https://x.com/Vaibhavmore7378"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
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
    </div>
  );
};

export default ContactIcons;
