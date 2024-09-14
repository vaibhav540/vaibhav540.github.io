// HamburgerMenu.jsx
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger and close icons

const HamburgerMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className="relative lg:hidden mb-10 mt-8">
      <button
        className="text-3xl text-white focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      {isMenuOpen && (
        <div className="absolute top-12 right-0 bg-black text-white w-48 rounded-lg shadow-lg">
          <nav className="flex flex-col p-4">
            <a
              href="#education"
              className="py-2 px-4 hover:bg-gray-700 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Education
            </a>
            <a
              href="#skills"
              className="py-2 px-4 hover:bg-gray-700 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#experience"
              className="py-2 px-4 hover:bg-gray-700 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#achievements"
              className="py-2 px-4 hover:bg-gray-700 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Achievements
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
