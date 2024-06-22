import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Formulario from "../Components/Formulario";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

function Aside() {
  return (
    <div className="float-right mt-5">
      <aside className="ml-12">
        <section className="grid grid-flow-col w-96">
          <img
            className="rounded-full"
            src="src/assets/img/fotoperfil.png"
            alt=""
          />
          <div className="mr-10">
            <p className="text-gray-700 w-44">
              I'm Catherine - the recipe developer and foot photographer behind
              Blue Skyn Eating. Here you'll find plenty of delicious gluten free
              foodie
            </p>
          </div>
        </section>
        <p className="text-gray-700">
          inspitation. I hope you enjoy exploring!
        </p>
        <hr className="my-10 w-80" />
        <div className="flex justify-center space-x-4 gap-1 mr-16">
          <a
            href="https://anderh4ck0@gmail.com"
            className="text-gray-600 hover:bg-gray-200 hover:rounded-full hover:transition duration-500 hover:duration-500 hover:transform p-2 "
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
        <hr className="my-10 w-80" />
        {/* FORMULARIO */}
        <Formulario />
        <hr className="mt-9 w-80" />
        {/* INSTAGRAM FOTOS */}
        <div className="mt-16 ml-6">
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black rounded-full text-pink-600 hover:opacity-65 hover:transition duration-300 hover:duration-300 hover:transform p-2"
            >
              <FaInstagram className="h-8 w-8" />
            </a>
            <div className="mt-4">
              <a
                className="font-bold text-base hover:opacity-65 hover:transition duration-300 hover:duration-300 hover:underline "
                href=""
              >
                @blueskyeating
              </a>
            </div>
          </div>
          {/* BOTON FOLLOW INSTAGRAM */}
          <div>
            <button className="bg-sky-500 w-44 h-10 text-white rounded hover:opacity-65 duration-300">Follow an Instagram</button>
            <div>
              fotos
            </div>
          </div>
        </div>
        {/* FOTOS DE IG */}
        <div>

        </div>
      </aside>
    </div>
  );
}

export default Aside;
