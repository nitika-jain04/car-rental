import TestimonialsCard from "./UI/Testimonial-Card";

export default function Testimonials() {
  const testimonialsData = [
    {
      image: "/harrypotter.jpg",
      fullName: "Parry Hotter",
      location: "Belgrade",
      review:
        "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. ",
    },
    {
      image: "/ron.jpg",
      fullName: "Ron",
      location: "Novi Sad",
      review:
        "The car was in great condition and made our trip even better. Highly recommend for this car rental website!",
    },
  ];

  return (
    <div className="bg-gray-100 px-6 md:px-12 lg:px-20 py-12 md:py-20 lg:py-28">
      <div className="flex flex-col items-center font-rubik">
        <h5 className="text-xl md:text-2xl font-bold">Reviewed by People</h5>
        <h1 className="font-extrabold text-3xl md:text-4xl mt-2 font-poppins">
          Client's Testimonials
        </h1>
        <p className="text-gray-500 text-center mt-4 max-w-3xl justify-center">
          Discover the positive impact we've made on our clients by reading
          through their<br></br> testimonials. Our clients have experienced our
          service and results, and they're eager to share<br></br> their
          positive experiences with you.
        </p>
      </div>

      <div className="flex flex-col md:flex-row mt-10 md:mt-20 lg:mt-24 md:px-4 lg:px-16">
        {testimonialsData.map((data) => (
          <TestimonialsCard
            key={data.fullName}
            review={data.review}
            image={data.image}
            fullName={data.fullName}
            location={data.location}
          />
        ))}
      </div>
    </div>
  );
}
