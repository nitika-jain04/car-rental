export default function HeroSection() {
  return (
    <div className="flex gap-12 mt-40 justify-center">
      <img src="/aboutImg.jpg" alt="" className="max-h-[410px] mt-12" />
      <div>
        <h4 className="text-2xl font-semibold">About Company</h4>
        <h1 className="text-5xl font-bold mt-3 leading-[50px]">
          You start the engine<br></br> and your adventure<br></br> begins
        </h1>
        <p className="text-gray-500 text-base mt-5">
          Certain but she but shyness why cottage. Guy the put<br></br>{" "}
          instrument sir entreaties affronting. Pretended exquisite<br></br> see
          cordially the you. Weeks quiet do vexed or whose.<br></br> Motionless
          if no to affronting imprudence no precaution.<br></br> My indulged as
          disposal strongly attended.
        </p>
        <div className="flex gap-24 mt-5">
          <img src="/aboutCar.png" alt="" />
          <img src="/aboutRent.png" alt="" />
          <img src="/aboutRepair.png" alt="" />
        </div>
        <div className="flex gap-10 mt-5">
          <div className="flex gap-2">
            <h1 className="text-5xl font-bold mt-1">20</h1>
            <h5 className="text-gray-500">
              Car<br></br> Types
            </h5>
          </div>
          <div className="flex gap-2">
            <h1 className="text-5xl font-bold mt-1">85</h1>
            <h5 className="text-gray-500">
              Rental<br></br> Outlets
            </h5>
          </div>
          <div className="flex gap-2">
            <h1 className="text-5xl font-bold mt-1">75</h1>
            <h5 className="text-gray-500">
              Repair<br></br> Shop
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
