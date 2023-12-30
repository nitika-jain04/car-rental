export default function Download() {
  return (
    <div className="bg-gray-100">
      <div className="flex">
        <div className="flex flex-col px-20 py-20 max-w-4xl font-poppins">
          <h1 className="text-[40px] font-bold">Download our app to get</h1>
          <h1 className="text-[40px] font-bold tracking-wider mt-2">
            most out of it
          </h1>
          <p className="text-gray-500 mt-8 text-md max-w-xl leading-6 font-rubik">
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <div className="flex gap-5 mt-8 hover:cursor-pointer">
            <img src="/googlePlay.svg" alt="" />
            <img src="/appStore.svg" alt="" />
          </div>
        </div>

        <img className="w-64 mt-12 ml-60" src="/downloadImg.webp" alt="" />
      </div>
    </div>
  );
}
