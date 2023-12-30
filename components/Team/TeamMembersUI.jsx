export default function TeamMembersUI({ image, membername, designation }) {
  return (
    <div className="bg-gray-50 shadow-lg mt-5">
      <img src={image} alt="" />
      <div className="flex flex-col items-center px-10 py-10 bg-white">
        <h1 className="text-2xl font-bold">{membername}</h1>
        <h2 className=" text-base font-semibold tracking-wide text-gray-500">
          {designation}
        </h2>
      </div>
    </div>
  );
}
