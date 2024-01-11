import { GoChevronRight } from "react-icons/go";
import DealsUI from "./UI/Deals-UI.jsx";

const dealsData = [
  {
    image: "/crossCountry.png",
    title: "Cross Country Drive",
    description:
      "Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.",
  },
  {
    image: "/pricing.png",
    title: "All Inclusive Pricing",
    description:
      "Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.",
  },
  {
    image: "/charges.png",
    title: "No Hidden Charges",
    description:
      "Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.",
  },
];

export default function Deals() {
  return (
    <div className="mb-24">
      <img className="h-2xl w-3xl mx-auto block" src="/cars.png" />

      <div className="flex px-40 gap-40 mt-12">
        <div className="flex flex-col max-w-lg mt-10">
          <h5 className="font-bold text-xl font-rubik">Why Choose Us</h5>
          <h1 className="mt-2 font-bold text-5xl font-poppins">
            Best valued deals you will ever find
          </h1>
          <p className="mt-4 text-gray-500 font-rubik">
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so don't miss out on your chance to save big.
          </p>
          <button className="flex items-center gap-2 bg-orange-600 text-white font-bold px-8 py-5 mt-8 rounded-sm max-w-48 font-poppins hover:shadow-lg hover:shadow-orange-500">
            <h1>Find Details</h1>
            <GoChevronRight className="text-2xl font-extrabold" />
          </button>
        </div>

        <div>
          {dealsData.map((data) => {
            return (
              <DealsUI
                key={data.title}
                img={data.image}
                title={data.title}
                description={data.description}
              ></DealsUI>
            );
          })}
        </div>
      </div>
    </div>
  );
}
