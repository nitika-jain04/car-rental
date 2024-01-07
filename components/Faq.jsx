import FaqCard from "./UI/FaqCard";

const faqData = [
  {
    questionNumber: "1",
    questionTitle: "What is special about comparing rental car deals?",
    answer:
      "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies",
  },
  {
    questionNumber: "2",
    questionTitle: "How do I find the car rental deals?",
    answer:
      "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.",
  },
  {
    questionNumber: "3",
    questionTitle: "How do I find such low rental car prices?",
    answer:
      "Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.",
  },
];

export default function Faq() {
  return (
    <div className="bg-white p-5 md:p-10 lg:p-20">
      <div className="flex flex-col items-center font-poppins">
        <h5 className="font-bold text-xl md:text-2xl lg:text-3xl">FAQ</h5>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-2 tracking-wide">
          Frequently Asked Questions
        </h2>
        <p className="mt-5 text-gray-500 max-w-3xl text-center">
          Frequently Asked Questions About the Car Rental Booking Process on Our
          Website: Answers to Common Concerns and Inquiries.
        </p>
      </div>

      <div className="mt-10 shadow-lg mx-2 md:mx-10 lg:mx-20">
        {faqData.map((data) => {
          return (
            <FaqCard
              key={data.questionTitle}
              questionNumber={data.questionNumber}
              questionTitle={data.questionTitle}
              answer={data.answer}
            />
          );
        })}
      </div>
    </div>
  );
}
