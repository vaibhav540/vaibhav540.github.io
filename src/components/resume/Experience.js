import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 px-4 lg:px-8 font-titleFont flex flex-col lg:flex-row gap-10 lg:gap-20"
    >
      {/* Projects & Experience Section */}
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Projects & Experience
          </h2>
        </div>
        <div className="mt-6 lg:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {/* Personal Portfolio Website */}
          <ResumeCard
            title="Personal Portfolio Website"
            subTitle="Self-Project (2023)"
            result="Tech Stack: React.js, CSS, EmailJS"
            des="Developed a fully responsive personal portfolio to showcase my skills, projects, and experience. The site features dynamic routing using React Router and includes animations with Framer Motion to enhance user experience. Integrated an email contact form via EmailJS to allow potential employers or collaborators to reach out directly."
          />

          {/* E-commerce Web App */}
          <ResumeCard
            title="E-commerce Web Application"
            subTitle="Freelance Project (2022)"
            result="Tech Stack: React.js, Node.js, MongoDB, Stripe"
            des="Designed and implemented a full-stack e-commerce platform where users can browse products, add them to a shopping cart, and securely make purchases using Stripe payment integration. The frontend was built with React.js and integrated with a backend API built in Node.js, using MongoDB as the database. The platform features user authentication (JWT), admin panel for managing products, and real-time order tracking."
          />

          {/* Open Source Contributions */}
          <ResumeCard
            title="Open Source Contributions"
            subTitle="GitHub (2021)"
            result="Tech Stack: JavaScript, Git, GitHub"
            des="Actively contributed to various open-source projects, resolving issues, improving documentation, and adding new features. Collaborated with other developers in the GitHub community to enhance the functionality and performance of several projects. Gained experience in version control and project collaboration using Git and GitHub."
          />
        </div>
      </div>

      {/* Additional Experience Section */}
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Additional Experience
          </h2>
        </div>
        <div className="mt-6 lg:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {/* Coding Bootcamp Volunteer */}
          <ResumeCard
            title="Coding Bootcamp Volunteer"
            subTitle="Masai School (2023 - 2024)"
            result="India"
            des="Assisted students during live coding sessions and hackathons by guiding them through complex problems and debugging code. Helped improve their understanding of key concepts in JavaScript, React.js, and algorithms. This experience enhanced my communication and mentoring skills, along with deepening my knowledge of web development technologies."
          />

          {/* Web Developer Intern */}
          <ResumeCard
            title="Web Developer Intern"
            subTitle="Startup Incubator (2020)"
            result="Remote"
            des="Worked as a frontend developer intern for a startup incubator, where I was responsible for designing responsive UIs using HTML, CSS, and JavaScript. Collaborated with backend developers to ensure seamless integration of frontend components with backend APIs. Gained hands-on experience with version control using Git, code reviews, and improving website performance for different screen sizes."
          />

          {/* Technical Blog Writer */}
          <ResumeCard
            title="Technical Blog Writer"
            subTitle="Medium & Dev.to (2019 - Present)"
            result="Remote"
            des="Wrote technical articles on web development topics, including React.js, Node.js, and best practices in JavaScript. My blogs have received positive feedback from readers and have been featured in popular programming communities. This helped me improve my technical writing and deepen my understanding of concepts while sharing knowledge with the community."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
