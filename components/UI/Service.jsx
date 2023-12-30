export default function Service({ image, heading, description }) {
  return (
    <div className="flex flex-col items-center">
      <img className="w-44 mt-14" src={image} alt="" />
      <h1 className="font-extrabold text-2xl font-poppins">{heading}</h1>
      <p className="mt-5 text-gray-500 px-16 text-center font-rubik max-w-3xl">
        {description}
      </p>
    </div>
  );
}
