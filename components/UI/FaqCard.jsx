import { RiArrowDropDownLine } from "react-icons/ri";

export default function FaqCard({ questionNumber, questionTitle }) {
  return (
    <div className="flex items-center justify-between px-8 py-2 border border-gray-200 border-opacity-25 font-poppins">
      <div className="flex items-center">
        <h1 className="px-2 py-2 font-medium">{`${questionNumber}.`}</h1>
        <h1 className="text-lg font-medium">{questionTitle}</h1>
      </div>
      <div>
        <RiArrowDropDownLine className="text-5xl" />
      </div>
    </div>
  );
}
