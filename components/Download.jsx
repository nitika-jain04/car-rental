export default function Download() {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col-reverse md:flex-row">
        <div className="flex flex-col px-4 md:px-20 md:py-20 max-w-4xl font-poppins">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Download our app to get
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider mt-2">
            most out of it
          </h1>
          <p className="text-gray-500 mt-4 md:mt-8 text-sm md:text-md lg:text-lg max-w-xl leading-6 font-rubik">
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <div className="flex gap-5 mt-4 md:mt-8 hover:cursor-pointer">
            <img src="/googlePlay.svg" alt="" />
            <img src="/appStore.svg" alt="" />
          </div>
        </div>

        <img
          className="w-40 h-[420px] md:w-1/2 lg:w-1/3 xl:w-1/4 mt-4 md:mt-12 md:ml-6 lg:ml-12"
          src="/downloadImg.webp"
          alt=""
        />
      </div>
    </div>
  );
}
