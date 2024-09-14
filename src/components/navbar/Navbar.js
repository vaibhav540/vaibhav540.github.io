import React, { useState } from "react";
import { logo } from "../../assets/index";
import { Link } from "react-scroll";
import { navLinks } from "./../../constants/NavLinks";
import { HiMenuAlt4, HiX } from "react-icons/hi"; // Hamburger and Close icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full sticky top-0 z-30 bg-bodyColor h-24 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      {/* Logo */}
      <div className="w-50 rounded-md">
        <img id="nav-img" className="w-20" src={logo} alt="Logo" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="flex items-center gap-8 lg:gap-10">
          {navLinks.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor transition duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Icon */}
      <div className="flex md:hidden">
        <button
          className="text-3xl text-gray-400 hover:text-designColor"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX /> : <HiMenuAlt4 />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-24 left-0 w-full bg-bodyColor py-4 md:hidden border-t-[1px] border-t-gray-600">
          <ul className="flex flex-col items-center gap-6">
            {navLinks.map(({ _id, title, link }) => (
              <li
                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor transition duration-300"
                key={_id}
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)} // Close menu after clicking a link
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
