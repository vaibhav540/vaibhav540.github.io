import React, { useState } from "react";
import Education from "./Education";
import Skills from "./Skills";
import Achievement from "./Achievement";
import Experience from "./Experience";
import Title from "./../shared/Title";
import ResumeCard from "./ResumeCard"; // Assuming this is a component used elsewhere
import { FaDownload } from "react-icons/fa"; // Importing an icon for the download button

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);

  return (
    <section id="resume" className="w-full border-b-[1px] border-b-black">
      <div className="flex justify-center my-20 items-center text-center">
        <Title title="7+ YEARS OF EXPERIENCE" description="My Resume" />
      </div>

      {/* Download CV Button */}
      <div className="flex justify-center mb-10">
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

      <div>
        <ul className="w-full grid grid-cols-4">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={` ${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resume`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={` ${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resume`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) &
              setAchievementData(false)
            }
            className={` ${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resume`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(true)
            }
            className={` ${
              achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resume`}
          >
            Achievements
          </li>
        </ul>
      </div>

      {educationData && <Education />}
      {skillData && <Skills />}
      {experienceData && <Experience />}
      {achievementData && <Achievement />}
    </section>
  );
};

export default Resume;
