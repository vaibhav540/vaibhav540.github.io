// Projects.js
import React from "react";
import Title from "./../shared/Title";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      {/* Title */}
      <div className="flex justify-center items-center text-center mb-16 md:mb-24">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          description="My Projects"
        />
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10">
        <ProjectCard
          title="Casio.com clone"
          description="A social media clone with features like posting, commenting, and liking."
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdttnRXKZqdVlK2byJUsMv1vB-3Gfs68-VWg&s"
          githubLink="https://github.com/vaibhav540/CW-204-Project/blob/main/Bootstrap/basicStruct.html"
          globeLink="https://65db216b4e315fbeceaf153e--splendorous-yeot-4cdc40.netlify.app/"
        />
        <ProjectCard
          title="New-york-times"
          description="An E-commerce platform offering a range of products with a seamless user interface."
          src="https://www.liveagent.com/wp/urlslab-download/9cce9a535855dd84160af9e8b0db3cd1/1684233880"
          githubLink="https://github.com/tusharbisht16/New-york-times.git"
          globeLink="https://www.nytimes.com/international/"
        />
        <ProjectCard
          title="Weekend-planner"
          description="A real-time chatting application with group chat and direct messaging features."
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqfhFIN-6ZrNmpZuV6-DSZ_rCuuwWTF60WGg&s"
          githubLink="https://github.com/vaibhav540/Democracy-Data_035.git"
          globeLink="https://weekend-planning.netlify.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
