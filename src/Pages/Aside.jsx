import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Formulario from "../Components/Formulario";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaYoutube,
  FaHeart,
} from "react-icons/fa";

function Aside() {
  return (
    <div>
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
                I'm Catherine - the recipe developer and foot photographer
                behind Blue Skyn Eating. Here you'll find plenty of delicious
                gluten free foodie
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
          <div className="mt-16 w-80 ml-6">
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
              <button className="bg-sky-500 w-44 h-10 text-white rounded hover:opacity-65 duration-300">
                Follow an Instagram
              </button>
              <div>
                <div className="w-64 gap-3 grid grid-cols-3 mt-4">
                  <a
                    className="relative group transition duration-300 transform hover:bg-black"
                    href=""
                  >
                    <img
                      className="h-20 w-20"
                      src="src/assets/img/card1.png"
                      alt="foto"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <FaInstagram className="h-5 w-6 text-white absolute inset-0 mt-14 ml-12 transform opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-8 left-2 text-white flex items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <FaHeart className="h-2 w-2 mr-1" />
                      <span className="font-bold">78</span>
                    </div>
                    <div className="absolute bottom-8 right-2 text-white flex items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <FaHeart className="h-2 w-2 mr-1" />
                      <span className="font-bold">7</span>
                    </div>
                  </a>
                  <a
                    className="relative group transition duration-300 transform hover:bg-black"
                    href=""
                  >
                    <img
                      className="h-20 w-20"
                      src="src/assets/img/card01.png"
                      alt="foto"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <FaInstagram className="h-5 w-6 text-white absolute inset-0 mt-14 ml-12 transform opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-8 left-2 text-white flex items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <FaHeart className="h-2 w-2 mr-1" />
                      <span className="font-bold">78</span>
                    </div>
                    <div className="absolute bottom-8 right-2 text-white flex items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <FaHeart className="h-2 w-2 mr-1" />
                      <span className="font-bold">7</span>
                    </div>
                  </a>
                  <a
                    className="relative group transition duration-300 transform hover:bg-black"
                    href=""
                  >
                    <img
                      className="h-20 w-20"
                      src="src/assets/img/card02.png"
                      alt="foto"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <FaInstagram className="h-5 w-6 text-white absolute inset-0 mt-14 ml-12 transform opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-8 left-2 text-white flex items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <FaHeart className="h-2 w-2 mr-1" />
                      <span className="font-bold">78</span>
                    </div>
                    <div className="absolute bottom-8 right-2 text-white flex items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <FaHeart className="h-2 w-2 mr-1" />
                      <span className="font-bold">7</span>
                    </div>
                  </a>
                  <a
                    className="relative group transition duration-300 transform hover:bg-black"
                    href=""
                  >
                    <img
                      className="h-20 w-20"
                      src="src/assets/img/card03.png"
                      alt="foto"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <FaInstagram className="h-5 w-6 text-white absolute inset-0 mt-14 ml-12 transform opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-8 left-2 text-white flex items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <FaHeart className="h-2 w-2 mr-1" />
                      <span className="font-bold">78</span>
                    </div>
                    <div className="absolute bottom-8 right-2 text-white flex items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <FaHeart className="h-2 w-2 mr-1" />
                      <span className="font-bold">7</span>
                    </div>
                  </a>
                  <a
                    className="relative group transition duration-300 transform hover:bg-black"
                    href=""
                  >
                    <img
                      className="h-20 w-20"
                      src="src/assets/img/card04.png"
                      alt="foto"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <FaInstagram className="h-5 w-6 text-white absolute inset-0 mt-14 ml-12 transform opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-8 left-2 text-white flex items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <FaHeart className="h-2 w-2 mr-1" />
                      <span className="font-bold">78</span>
                    </div>
                    <div className="absolute bottom-8 right-2 text-white flex items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <FaHeart className="h-2 w-2 mr-1" />
                      <span className="font-bold">7</span>
                    </div>
                  </a>
                  <a
                    className="relative group transition duration-300 transform hover:bg-black"
                    href=""
                  >
                    <img
                      className="h-20 w-20"
                      src="src/assets/img/card05.png"
                      alt="foto"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <FaInstagram className="h-5 w-6 text-white absolute inset-0 mt-14 ml-12 transform opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-8 left-2 text-white flex items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <FaHeart className="h-2 w-2 mr-1" />
                      <span className="font-bold">78</span>
                    </div>
                    <div className="absolute bottom-8 right-2 text-white flex items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <FaHeart className="h-2 w-2 mr-1" />
                      <span className="font-bold">7</span>
                    </div>
                  </a>
                  <a
                    className="relative group transition duration-300 transform hover:bg-black"
                    href=""
                  >
                    <img
                      className="h-20 w-20"
                      src="src/assets/img/card06.jpg"
                      alt="foto"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <FaInstagram className="h-5 w-6 text-white absolute inset-0 mt-14 ml-12 transform opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-8 left-2 text-white flex items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <FaHeart className="h-2 w-2 mr-1" />
                      <span className="font-bold">78</span>
                    </div>
                    <div className="absolute bottom-8 right-2 text-white flex items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <FaHeart className="h-2 w-2 mr-1" />
                      <span className="font-bold">7</span>
                    </div>
                  </a>
                  <a
                    className="relative group transition duration-300 transform hover:bg-black"
                    href=""
                  >
                    <img
                      className="h-20 w-20"
                      src="src/assets/img/card07.jpg"
                      alt="foto"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <FaInstagram className="h-5 w-6 text-white absolute inset-0 mt-14 ml-12 transform opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-8 left-2 text-white flex items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <FaHeart className="h-2 w-2 mr-1" />
                      <span className="font-bold">78</span>
                    </div>
                    <div className="absolute bottom-8 right-2 text-white flex items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <FaHeart className="h-2 w-2 mr-1" />
                      <span className="font-bold">7</span>
                    </div>
                  </a>
                  <a
                    className="relative group transition duration-300 transform hover:bg-black"
                    href=""
                  >
                    <img
                      className="h-20 w-20"
                      src="src/assets/img/card08.jpg"
                      alt="foto"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <FaInstagram className="h-5 w-6 text-white absolute inset-0 mt-14 ml-12 transform opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-8 left-2 text-white flex items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <FaHeart className="h-2 w-2 mr-1" />
                      <span className="font-bold">78</span>
                    </div>
                    <div className="absolute bottom-8 right-2 text-white flex items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <FaHeart className="h-2 w-2 mr-1" />
                      <span className="font-bold">7</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-16 w-80" />
          <div className="mt-16">
            <a className="hover:opacity-60" href="">
              <img src="src/assets/img/feed_wht.jpg" alt="foto" />
            </a>
          </div>
          <hr className="mt-16 w-80" />
        </aside>
      </div>
    </div>
  );
}

export default Aside;
