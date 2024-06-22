import React from "react";
import Header from "./header.jsx";
import Aside from "./Aside.jsx";
import Formulario from "../Components/Formulario.jsx";

function Home() {
  return (
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
            <img src="src\assets\card1.png" alt="" />
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
            <img src="src\assets\card2.png" alt="" />
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
            <img src="src\assets\card01.png" alt="" />
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
            <img src="src\assets\card02.png" alt="" />
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
            <img src="src\assets\card03.png" alt="" />
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
            <img src="src\assets\card04.png" alt="" />
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
            <img src="src\assets\card05.png" alt="" />
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
            <img src="src\assets\card06.jpg" alt="" />
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
            <img src="src\assets\card07.jpg" alt="" />
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
            <img src="src\assets\card08.jpg" alt="" />
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
  );
}

export default Home;
