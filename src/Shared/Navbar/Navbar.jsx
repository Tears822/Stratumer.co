/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import Logo from "/images/logo.png";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  //sticky

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */

  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  // modal openar

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`w-full transition-all duration-300 bg-transparent relative z-[99999]`}
    >
      <header
        className="header-section bg-white"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="Container">
          {/* main Navbar */}
          <div className="flex flex-col lg:flex-row items-center justify-between lg:h-[100px] ">
            {/* website Logo */}
            <div className=" w-48 lg:w-52">
              <Link to="/">
                <img
                  draggable="false"
                  src={Logo}
                  className="hidden lg:block"
                  alt="website_logo"
                />
              </Link>
            </div>
            {/* small screen size */}
            <div className="w-full lg:hidden flex justify-between h-[70px] items-center p-3">
              <div className="w-28">
                <Link to="/">
                  <img
                    draggable="false"
                    src={Logo}
                    className="block lg:hidden "
                    alt="constre_website_logo"
                  />
                </Link>
              </div>
              {/* toggle bar mode. */}
              <button
                className="lg:hidden block focus:outline-none "
                onClick={toggleNavbar}
              >
                {/* modal open and close */}
                {isOpen ? (
                  <IoMdClose className="w-6 h-6 text-HeadingColor-0" />
                ) : (
                  <FaBars className="w-5 h-5 text-HeadingColor-0" />
                )}
              </button>
            </div>
            {/* All navLink are hear with active */}
            <div className="flex gap-6 items-center">
              <ul
                className={`${
                  isOpen ? "block" : "hidden"
                } text-right lg:w-fit ease-in-out flex-1 lg:flex space-y-2 lg:space-y-0 space-x-0 flex flex-col lg:flex-row capitalize text-sm lg:bg-transparent py-3 lg:py-0 font-Nunito font-medium sm:text-base text-HeadingColor-0 transition-all duration-500
                `}
              >
                <NavLink
                  to="/"
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-HeadingColor-0 text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300`}
                >
                  Home
                </NavLink>
                <NavLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-HeadingColor-0 text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300`}
                  to="/about"
                >
                  About
                </NavLink>
                <NavLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-HeadingColor-0 text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300`}
                  to="/service"
                >
                  Service
                </NavLink>
                <NavLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-HeadingColor-0 text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300`}
                  to="/career"
                >
                  Careers
                </NavLink>
                {/* blog sub menu link */}
                <NavLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-HeadingColor-0 text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300`}
                  to="/blog_grid"
                >
                  Blog
                </NavLink>
                <NavLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-HeadingColor-0 text-left lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300`}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </ul>
              <div className="hidden lg:flex items-center">
                <button>
                  <IoSearch className="text-2xl ml-2 mr-10 text-HeadingColor-0" />
                </button>
                <Link to={"/contact"} className="header-btn">
                  Get A Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
