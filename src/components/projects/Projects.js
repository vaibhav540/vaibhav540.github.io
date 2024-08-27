import React from "react";
import Title from "./../shared/Title";
import ProjectCard from "./ProjectCard";
import { projectOne, projectTwo, projectThree } from "../../assets";

const Projects = () => {
  return (
    <div id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center mb-36">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          description="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectCard
          title="SOCIAL MEDIA CLONE"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
          globeLink=" https://65db216b4e315fbeceaf153e--splendorous-yeot-4cdc40.netlify.app/"
        />
        <ProjectCard
          title="E-commerce Website"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
          globeLink=" https://brickbreaker-by-prathamesh.netlify.app/"
        />
        <ProjectCard
          title="Chatting App"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
          globeLink="https://example.com/chatting-app"
        />
        <ProjectCard
          title="SOCIAL MEDIA CLONE"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
          globeLink="https://example.com/social-media-clone"
        />
        <ProjectCard
          title="E-commerce Website"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
          globeLink="https://example.com/ecommerce-website"
        />
        <ProjectCard
          title="Chatting App"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
          globeLink="https://example.com/chatting-app"
        />
      </div>
    </div>
  );
};

export default Projects;
