import React from "react";
import { FaSearch } from "react-icons/fa";
import "../style.css";

function Header() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <a
          className="hover:opacity-65 hover:transition duration-300 hover:duration-300"
          href=""
        >
          <img
            className="mx-auto"
            src="src/assets/img/logobluesky.png"
            alt="logo"
          />
        </a>
      </div>
      <hr className="mt-7 mb-5" />
      <div className="flex justify-center">
        <ul className="flex space-x-4 mt-2">
          <li className="pr-6 relative">
            <a
              className="text-black hover:text-gray-400 transition duration-300 transform hover:scale-105"
              href="/"
            >
              HOME
            </a>
          </li>
          <li className="pr-6 relative group">
            <a
              className="text-black hover:text-gray-400 transition duration-300 transform hover:scale-105"
              href="/Recipes"
            >
              RECIPES
            </a>
            <ul className="absolute w-52 bg-white border-gray-200 mt-1 py-1 hidden group-hover:block">
              <li>
                <a
                  className="block w-full px-4 py-3 text-base text-gray-700 transition duration-300 transform hover:bg-black hover:text-white"
                  href="/Recipes/brakingydessert"
                >
                  BRAKING & DESSERT
                </a>
              </li>
              <li>
                <a
                  className="block w-full px-4 py-3 text-base text-gray-700 transition duration-300 transform hover:bg-black hover:text-white"
                  href="/Recipes/dinner"
                >
                  DINNER
                </a>
              </li>
              <li>
                <a
                  className="block w-full px-4 py-3 text-base text-gray-700 transition duration-300 transform hover:bg-black hover:text-white"
                  href="/Recipes/breakfast"
                >
                  BREAKFAST
                </a>
              </li>
            </ul>
          </li>
          <li className="pr-6 relative group">
            <a
              className="text-black hover:text-gray-400 transition duration-300 transform hover:scale-105"
              href="/About"
            >
              ABOUT
            </a>
            <ul className="absolute w-52 bg-white border-gray-200 mt-1 py-1 hidden group-hover:block">
              <li>
                <a
                  className="block w-full px-4 py-3 text-base text-gray-700 transition duration-300 transform hover:bg-black hover:text-white"
                  href="/About/workwithme"
                >
                  WORK WITH ME
                </a>
              </li>
              <li>
                <a
                  className="block w-full px-4 py-3 text-base text-gray-700 transition duration-300 transform hover:bg-black hover:text-white"
                  href="/About/portfolio"
                >
                  PORTFOLIO
                </a>
              </li>
            </ul>
          </li>
          <li className="pr-14 relative">
            <a
              className="text-black hover:text-gray-400 transition duration-300 transform hover:scale-105"
              href="/Contact"
            >
              CONTACT
            </a>
          </li>
        </ul>
        <form className="border rounded-md p-1 border-gray-200">
          <div className="p-1">
            <input
              className="border-none focus:outline-none text-gray-500 focus:border-none no-cancel-button"
              type="search"
              placeholder="Search"
            />
            <button type="submit" className="rounded-md px-3">
              <FaSearch className="text-gray-500" />
            </button>
          </div>
        </form>
      </div>
      <hr className="mt-5 mb-10" />
    </div>
  );
}

export default Header;
