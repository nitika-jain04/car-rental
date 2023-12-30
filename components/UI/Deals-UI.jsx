export default function DealsUI({ img, title, description }) {
  return (
    <div className="flex gap-4 mt-10">
      <img src={img} alt="" />

      <div>
        <h1 className="text-2xl text font-extrabold tracking-wide font-poppins">
          {title}
        </h1>
        <p className="text-gray-500 text-md leading-5 mt-2 text-left max-w-80 font-rubik tracking-normal">
          {description}
        </p>
      </div>
    </div>
  );
}
