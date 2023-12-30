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
      <div className="flex mt-14 bg-pink-300 ml-20 mr-20">
        <div className="flex flex-col">
          <button>Audi A1 S-Line</button>
          <button>VW Golf 6</button>
          <button>Toyota Camry</button>
          <button>BMW 320 ModernLine</button>
          <button>Mercedes-Bens GLK</button>
          <button>VW Passat CC</button>
        </div>

        <img src="/vehicle1.jpg" alt="" />

        <div>
          <div>$45 / rent per day</div>
          <span className="flex">
            <h2>Model</h2>
            <h2>|</h2>
            <h2>Audi</h2>
          </span>
        </div>
      </div>
    </div>
  );
}
