import React, { useState } from "react";
import Education from "./Education";
import Skills from "./Skills";
import Achievement from "./Achievement";
import Experience from "./Experience";
import Title from "./../shared/Title";
import { FaDownload } from "react-icons/fa"; // Importing an icon for the download button
import classNames from "classnames"; // Import classNames utility
import HamburgerMenu from "../HamburgerMenu"; // Adjust the path based on your file structure

const Resume = () => {
  const [activeSection, setActiveSection] = useState("education");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section
      id="resume"
      className="w-full border-b-[1px] border-b-black relative"
    >
      <div className="flex flex-col items-center my-20 text-center">
        <Title title="7+ YEARS OF EXPERIENCE" description="My Resume" />

        {/* Hamburger Menu */}
        <HamburgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        {/* Download CV Button */}
        <div className="flex justify-center mb-10 mt-6">
          {" "}
          {/* Added mt-6 for top margin */}
          <a
            href="https://drive.google.com/file/d/190HB-78XCEY985HDEGhEcvJh3A94MEqA/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="flex items-center bg-designColor text-white px-6 py-2 rounded-lg hover:bg-darkDesignColor transition duration-300"
          >
            <FaDownload className="mr-2" />
            Download CV
          </a>
        </div>

        {/* Navigation Tabs for Large Screens */}
        <div className="hidden lg:flex justify-center mb-8">
          <ul className="w-full grid grid-cols-4 gap-4">
            {["education", "skills", "experience", "achievements"].map(
              (section) => (
                <li
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={classNames(
                    "cursor-pointer py-2 px-4 text-center border-2 transition duration-300",
                    {
                      "border-designColor rounded-lg":
                        activeSection === section,
                      "border-transparent": activeSection !== section,
                    }
                  )}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Conditional Rendering of Sections */}
        {activeSection === "education" && <Education />}
        {activeSection === "skills" && <Skills />}
        {activeSection === "experience" && <Experience />}
        {activeSection === "achievements" && <Achievement />}
      </div>
    </section>
  );
};

export default Resume;
