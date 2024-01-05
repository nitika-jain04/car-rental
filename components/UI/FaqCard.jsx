import { useState } from "react";

export default function FaqCard({ questionNumber, questionTitle, answer }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  function handleButtonClick(answer) {
    setSelectedAnswer((prevAnswer) => (prevAnswer === answer ? null : answer));
  }

  return (
    <div
      className={`border-b py-5 px-10 cursor-pointer ${
        selectedAnswer ? "bg-orange-600" : ""
      }`}
    >
      <div className="flex items-center justify-between text-lg tracking-wide">
        <div>
          <span>{questionNumber}.</span>
          <span className="ml-2">{questionTitle}</span>
        </div>
        <div
          onClick={() => handleButtonClick(answer)}
          className="text-gray-500"
        >
          {selectedAnswer ? "-" : "+"}
        </div>
      </div>
      {selectedAnswer && (
        <div className="mt-3 text-white p-2 text-base text-justify px-2">
          {selectedAnswer}
        </div>
      )}
    </div>
  );
}
