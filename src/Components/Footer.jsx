import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaYoutube,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="bg-gray-100 h-44">
        <div className="flex justify-center space-x-4 gap-1 mr-16">
          <a
            href=""
            className="text-gray-600 hover:bg-gray-300 hover:rounded-full hover:transition duration-500 hover:duration-500 hover:transform p-2 "
          >
            <EnvelopeIcon className="h-6 w-6" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:bg-blue-200 hover:rounded-full hover:transition duration-500 hover:duration-500 hover:transform p-2"
          >
            <FaFacebook className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:bg-pink-200 hover:rounded-full hover:transition duration-500 hover:duration-500 hover:transform p-2"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
          <a
            href="https://www.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:bg-red-200 hover:rounded-full hover:transition duration-500 hover:duration-500 hover:transform p-2"
          >
            <FaPinterest className="h-6 w-6" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:bg-red-200 hover:rounded-full hover:transition duration-500 hover:duration-500 hover:transform p-2"
          >
            <FaYoutube className="h-6 w-6" />
          </a>
        </div>
        <div className="flex justify-center my-16 mr-20">
          <a
            className="underline text-lg hover:opacity-65 hover:transition duration-300 hover:duration-300"
            href=""
          >
            Privacy Policy
          </a>
        </div>
      </div>
      <div className="my-8 text-center mr-12">
        <h1 className="tracking-widest text-gray-500">
          COPYRIGHT © 2023 BLUE SKY EATING ON THE{" "}
          <a
            className="text-gray-700 underline hover:opacity-65 hover:transition duration-300 hover:duration-300 ml-2"
            href=""
          >
            FOODIE PRO THEME
          </a>{" "}
        </h1>
      </div>
    </div>
  );
}

export default Footer;
