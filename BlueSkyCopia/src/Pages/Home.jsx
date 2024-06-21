import React from "react";
import Header from "./header.jsx";
import Aside from "./Aside.jsx";

function Home() {
  return (
    <div className="container mx-auto px-48">
      <div>
        <Header />
      </div>
      <main>
        <div className=" text-xl  ml-72 flex flex-block">
          <h1 className="mr-44">LATEST RECIPES</h1>
          <div className="ml-80">
            <h1>WELCOME! 👋</h1>
          </div>
        </div>
        <section className="grid grid-flow-col mt-7 gap-6">
          <article className="w-96">
            <a
              className="transition duration-300 transform hover:opacity-60"
              href=""
            >
              <img src="src\assets\card1.png" alt="" />
            </a>
            <h2>CHICKEN AVOCADO PASTA</h2>
          </article>
          <article className="w-96">
            <a
              className="transition duration-300 transform hover:opacity-60"
              href=""
            >
              <img src="src\assets\card2.png" alt="" />
            </a>
            <h2>SAUSAGE AND VEG TRAY BAKE</h2>
          </article>
          <Aside />
        </section>
      </main>
    </div>
  );
}

export default Home;
