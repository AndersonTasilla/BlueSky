import React from "react";

function Aside() {
  return (
    <div>
      <aside className="ml-10">
        <section className="grid grid-flow-col w-96">
          <img
            className="rounded-full"
            src="src\assets\fotoperfil.png"
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
        <hr className="mt-10" />
      </aside>
    </div>
  );
}

export default Aside;
