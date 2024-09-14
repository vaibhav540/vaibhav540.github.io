import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Importing GitHub and External Link Icons

const ProjectCard = ({ title, description, src, githubLink, globeLink }) => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-700 to-blue-900 text-white p-6 shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
      {/* Image */}
      <div className="overflow-hidden rounded-lg mb-5">
        <img
          src={src}
          alt={title}
          className="w-full h-48 object-cover rounded-lg transition-opacity duration-300 hover:opacity-90"
        />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-3">{title}</h3>

      {/* Description */}
      <p className="text-base text-gray-300 mb-5">{description}</p>

      {/* Links with Icons */}
      <div className="mt-auto flex items-center space-x-4">
        <a
          href={githubLink}
          className="flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="mr-2" /> Source-Code
        </a>
        <a
          href={globeLink}
          className="flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaExternalLinkAlt className="mr-2" /> Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
