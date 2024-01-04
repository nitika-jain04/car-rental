import { PiQuotes } from "react-icons/pi";

export default function TestimonialsCard({
  review,
  image,
  fullName,
  location,
}) {
  return (
    <div className=" flex flex-col gap-4 px-12 py-14 bg-white ml-10">
      <div className="max-w-3xl">
        <p className="font-medium text-[24px] tracking-tight leading-7 font-poppins">{`"${review}"`}</p>
      </div>

      <div className="flex gap-4 items-center mt-5">
        <img className="w-20 rounded-full" src={image} alt="" />
        <div className="flex flex-col">
          <h1 className="font-bold whitespace-nowrap font-poppins">
            {fullName}
          </h1>
          <h5 className="font-rubik font-medium">{location}</h5>
        </div>
        <p>
          <PiQuotes className="ml-44 text-5xl text-orange-600 font-extrabold" />
        </p>
      </div>
    </div>
  );
}
