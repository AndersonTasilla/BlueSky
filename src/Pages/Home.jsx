import React from "react";
import Header from "./header.jsx";
import Aside from "./Aside.jsx";
import Footer from "../Components/Footer.jsx";
import card1 from "../assets/img/card1.png";
import card01 from "../assets/img/card01.png";
import card2 from "../assets/img/card2.png";
import card02 from "../assets/img/card02.png";
import card03 from "../assets/img/card03.png";
import card04 from "../assets/img/card04.png";
import card05 from "../assets/img/card05.png";
import card06 from "../assets/img/card06.jpg";
import card07 from "../assets/img/card07.jpg";
import card08 from "../assets/img/card08.jpg";

function Home() {
  return (
    <div>
      <div className="container mx-auto px-48  ">
        <div>
          <Header />
        </div>
        <div className=" text-xl  ml-72 flex flex-block">
          <h1 className="mr-44">LATEST RECIPES</h1>
          <div className="ml-64">
            <h1>WELCOME! 👋</h1>
          </div>
        </div>
        <Aside />
        <section className="grid grid-cols-2 gap-4 mt-7">
          <article>
            <a
              className="transition duration-300 transform hover:opacity-60"
              href=""
            >
              <img src={card1} alt="" />
            </a>
            <a
              className="transition duration-300 transform hover:opacity-60"
              href=""
            >
              <h2 className="mt-2">CHICKEN AVOCADO PASTA</h2>
            </a>
          </article>
          <article>
            <a
              className="transition duration-300 transform hover:opacity-60"
              href=""
            >
              <img src={card2} alt="" />
            </a>
            <a
              className="transition duration-300 transform hover:opacity-60"
              href=""
            >
              <h2 className="mt-2">SAUSAGE AND VEG TRAY BAKE</h2>
            </a>
          </article>
        </section>
        {/* COLOTES SEGUNDA SECTION */}
        <div className="grid grid-cols-4 gap-4 mt-14">
          <div>
            <a
              className="transition duration-300 transform hover:opacity-60"
              href=""
            >
              <img src={card01} alt="" />
            </a>
            <a
              className="transition duration-300 transform hover:opacity-60"
              href=""
            >
              <h2 className="mt-5">WHITE CHOCOLATE AND GRINGER COOKIE</h2>
            </a>
          </div>
          <div>
            <a
              className="transition duration-300 transform hover:opacity-60"
              href=""
            >
              <img src={card02} alt="" />
            </a>
            <a
              className="transition duration-300 transform hover:opacity-60"
              href=""
            >
              <h2 className="mt-5">TOFFEE APPLE TART</h2>
            </a>
          </div>
          <div>
            <a
              className="transition duration-300 transform hover:opacity-60"
              href=""
            >
              <img src={card03} alt="" />
            </a>
            <a
              className="transition duration-300 transform hover:opacity-60"
              href=""
            >
              <h2 className="mt-5">GLUTEN FREE SWEET PASTRY</h2>
            </a>
          </div>
          <div>
            <a
              className="transition duration-300 transform hover:opacity-60"
              href=""
            >
              <img src={card04} alt="" />
            </a>
            <a
              className="transition duration-300 transform hover:opacity-60"
              href=""
            >
              <h2 className="mt-5">BLACKBERRY CUPCAKES</h2>
            </a>
          </div>
          <div className="mt-14">
            <a
              className="transition duration-300 transform hover:opacity-60"
              href=""
            >
              <img src={card05} alt="" />
            </a>
            <a
              className="transition duration-300 transform hover:opacity-60"
              href=""
            >
              <h2 className="mt-5">LEMON AND RASPBERRY DRIZZLE CAKE</h2>
            </a>
          </div>
          <div className="mt-14">
            <a
              className="transition duration-300 transform hover:opacity-60"
              href=""
            >
              <img src={card06} alt="" />
            </a>
            <a
              className="transition duration-300 transform hover:opacity-60"
              href=""
            >
              <h2 className="mt-5">
                THE FLUFFIEST NO FRY DOUGHNUTS (3 EASY GLAZE OPTIONS!)
              </h2>
            </a>
          </div>
          <div className="mt-14">
            <a
              className="transition duration-300 transform hover:opacity-60"
              href=""
            >
              <img src={card07} alt="" />
            </a>
            <a
              className="transition duration-300 transform hover:opacity-60"
              href=""
            >
              <h2 className="mt-5">OREO TART (NO BAKE!)</h2>
            </a>
          </div>
          <div className="mt-14">
            <a
              className="transition duration-300 transform hover:opacity-60"
              href=""
            >
              <img src={card08} alt="" />
            </a>
            <a
              className="transition duration-300 transform hover:opacity-60"
              href=""
            >
              <h2 className="mt-5">THE BEST DAIRY FREE CARROT CAKE</h2>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-[530px]">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
