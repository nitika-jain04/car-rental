import { RiArrowDropDownLine } from "react-icons/ri";

export default function FaqCard({
  questionNumber,
  questionTitle,
  answer,
  onClick,
}) {
  const handleClick = () => {
    if (onClick) {
      onClick(questionTitle);
    }
  };

  return (
    <div className="border-b p-5 cursor-pointer" onClick={handleClick}>
      <div className="flex items-center justify-between">
        <div>
          <span className="font-bold">{questionNumber}.</span>
          <span className="ml-2">{questionTitle}</span>
        </div>
        <div className="text-gray-500">+</div>
      </div>
      {/* Conditionally render the answer based on the selected question */}
      {onClick && onClick(questionTitle) && (
        <p className="mt-2 text-gray-700">{answer}</p>
      )}
    </div>
  );
}
