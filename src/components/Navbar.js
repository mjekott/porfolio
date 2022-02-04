import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleNav = () => setOpen((curr) => !curr);

  return (
    <nav className="bg-gray-900  sticky top-0 z-10 text-white border-gray-200 px-2 sm:px-4 py-5  dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#home" className="ml-3 text-xl" onClick={() => setOpen(false)}>
          MJEKOTT
        </a>
        <div className="flex md:hidden">
          <button
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden outline-none "
            aria-controls="mobile-menu-4"
            aria-expanded="false"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggleNav}
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            open ? "flex" : "hidden"
          } justify-between transition duration-500 ease-in-out items-center w-full md:flex md:w-auto md:order-1`}
          id="mobile-menu-4"
        >
          <ul
            className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:items-center w-full "
            onClick={toggleNav}
          >
            <li>
              <a
                href="#projects"
                className="block w-full py-2 pr-4 pl-3  hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block w-full py-2 pr-4 pl-3  hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`inline-flex text-white items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0`}
              >
                Hire Me
                <ArrowRightIcon className="w-4 h-4 ml-1" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
