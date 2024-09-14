import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20"
    >
      {/* Education Section */}
      <div className="w-full lg:w-1/2">
        <div className="py-6 lg:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Education Quality
          </h2>
        </div>
        <div className="mt-6 lg:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-14">
          <ResumeCard
            title="SSC 10th"
            subTitle="B.K.Patil.Madhymik.Vidylaya, Belur (2006 - 2010)"
            percentage="PERC 80/100"
            description="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="HSC 12th"
            subTitle="Mahatma Phule Jr. College, Ahmedpur (2001 - 2005)"
            percentage="PERC 50/100"
            description="Higher education is tertiary education leading to the award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="BCA (Bachelor Of Computer Application)"
            subTitle="College Of Computer Sci & Info. Technology, Latur (1998 - 2000)"
            percentage="CGPA 9.2/10"
            description="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>

      {/* Experience/Projects Section */}
      <div className="w-full lg:w-1/2">
        <div className="py-6 lg:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Projects & Experience
          </h2>
        </div>
        <div className="mt-6 lg:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Personal Portfolio Website"
            subTitle="Self-Project (2023)"
            percentage=""
            description="Developed a responsive personal portfolio website using React.js, highlighting my projects, skills, and experience. Integrated email contact form using EmailJS."
          />
          <ResumeCard
            title="E-commerce Web App"
            subTitle="Freelance Project (2022)"
            percentage=""
            description="Built a full-stack e-commerce web application using React.js, Node.js, and MongoDB. Features included product browsing, user authentication, and payment integration."
          />
          <ResumeCard
            title="Open Source Contribution"
            subTitle="GitHub Contributions (2021)"
            percentage=""
            description="Contributed to open-source projects by fixing bugs, improving documentation, and implementing small features. Collaborated with other developers via GitHub."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
