function Formulario() {
  return (
    <div>
      <div className="bg-gray-300 w-80 h-72 rounded-lg p-5 text-center">
        <h2 className="tracking-widest text-gray-800 text-lg">
          WANT EVERY NEW RECIPE SENT STRAIGHT TO YOUR INBOX? 💌
        </h2>
        <p className="mt-2 text-gray-700">Sing up to my mailing list:</p>
        <input
          type="text"
          placeholder="Enter yout email here..."
          className="rounded-lg h-11 w-56 p-3 mt-8 border-none focus:outline-none text-gray-500 focus:border-none text-lg"
        />
        <button className="bg-neutral-800 text-white font-bold h-10 w-56 mt-3 rounded-lg ">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
}

export default Formulario;
