export default function Vehicle() {
  return (
    <div className="mt-40">
      <div className="text-center mt-5">
        <h5 className="text-2xl font-semibold tracking-wide">Vehicle Models</h5>
        <h1 className="text-4xl font-extrabold mt-3 tracking-wide">
          Our rental fleet
        </h1>
        <p className="text-gray-500 text-md mt-3">
          Choose from a variety of our amazing vehicles to rent for your next
          <br />
          adventure or business trip
        </p>
      </div>
      <div className="flex mt-14 ml-20 mr-20">
        <div className="flex flex-col gap-2 text-start">
          <button className="text-xl font-bold px-6 py-4 tracking-wider text-left bg-orange-600 text-white">
            Audi A1 S-Line
          </button>
          <button className="bg-gray-200 text-xl font-bold px-6 py-4 tracking-wider text-left hover:bg-orange-600 hover:text-white">
            VW Golf 6
          </button>
          <button className="bg-gray-200 text-xl font-bold px-6 py-4 tracking-widest text-left hover:bg-orange-600 hover:text-white">
            Toyota Camry
          </button>
          <button className="bg-gray-200 text-xl font-bold px-6 py-4 tracking-wider text-left hover:bg-orange-600 hover:text-white">
            BMW 320 ModernLine
          </button>
          <button className="bg-gray-200 text-xl font-bold px-6 py-4 tracking-wider text-left hover:bg-orange-600 hover:text-white">
            Mercedes-Bens GLK
          </button>
          <button className="bg-gray-200 text-xl font-bold px-6 py-4 tracking-wider text-left hover:bg-orange-600 hover:text-white">
            VW Passat CC
          </button>
        </div>

        <img
          className="max-w-6xl ml-40 mr-40 max-h-96"
          src="/vehicle1.jpg"
          alt=""
        />

        <div className="flex flex-col">
          <div className="bg-orange-600 text-white px-4 py-4 text-lg font-bold">
            $45 / rent per day
          </div>
          <span className="flex border-2 border-black px-5 py-2">
            <h2>Model</h2>
            <h2>|</h2>
            <h2>Audi</h2>
          </span>
          <span className="flex border-2 border-black px-5 py-2">
            <h2>Model</h2>
            <h2>|</h2>
            <h2>Audi</h2>
          </span>
          <span className="flex border-2 border-black px-5 py-2">
            <h2>Model</h2>
            <h2>|</h2>
            <h2>Audi</h2>
          </span>
          <span className="flex border-2 border-black px-5 py-2">
            <h2>Model</h2>
            <h2>|</h2>
            <h2>Audi</h2>
          </span>
          <span className="flex border-2 border-black px-5 py-2">
            <h2>Model</h2>
            <h2>|</h2>
            <h2>Audi</h2>
          </span>
          <span className="flex border-2 border-black px-5 py-2">
            <h2>Model</h2>
            <h2>|</h2>
            <h2>Audi</h2>
          </span>
        </div>
      </div>
    </div>
  );
}
