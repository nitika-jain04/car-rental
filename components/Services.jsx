import Service from "./UI/Service";

export default function Services() {
  const servicesData = [
    {
      image: "/carService.png",
      heading: "Select Car",
      description:
        "We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs",
    },
    {
      image: "/operatorService.png",
      heading: "Contact Operator",
      description:
        "Our knowledgeable and friendly operators are always ready to help with any questions or concerns",
    },
    {
      image: "/carRangeService.png",
      heading: "Let's Drive",
      description:
        "Whether you're hitting the open road, we've got you covered with our wide range of cars",
    },
  ];

  return (
    <div className="text-center mt-5 md:mt-20 bg-white px-4 md:px-12 lg:px-20 md:py-20">
      <h5 className="text-xl md:text-2xl font-semibold font-rubik">
        Plan your trip now
      </h5>
      <h1 className="mt-4 font-extrabold text-xl md:text-4xl tracking-wide font-poppins">
        Quick & easy car rental
      </h1>
      <div className="flex flex-col md:flex-row items-center md:ml-4 md:mr-4 lg:ml-20 lg:mr-20 mt-8">
        {servicesData.map((data) => (
          <Service
            key={data.heading}
            image={data.image}
            heading={data.heading}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
}
