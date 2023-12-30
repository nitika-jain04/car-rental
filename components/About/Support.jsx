import { IoCallOutline } from "react-icons/io5";

export default function Support() {
  return (
    <div className="flex gap-8 items-center justify-center mt-20 bg-zinc-800 py-20 text-white font-poppins">
      <h1 className="text-3xl tracking-wide font-bold">
        Book a car by getting in touch with us
      </h1>
      <div className="flex gap-2 items-center text-orange-600 hover:cursor-pointer font-rubik font-bold">
        <IoCallOutline className="text-4xl font-extrabold" />
        <h1 className="tracking-wider text-3xl">(123) -456-789</h1>
      </div>
    </div>
  );
}
