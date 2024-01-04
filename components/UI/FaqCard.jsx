export default function FaqCard({ questionNumber, questionTitle }) {
  return (
    <div className="border-b p-5 cursor-pointer">
      <div className="flex items-center justify-between">
        <div>
          <span className="font-bold">{questionNumber}.</span>
          <span className="ml-2">{questionTitle}</span>
        </div>
        <div className="text-gray-500">+</div>
      </div>
      {/* Conditionally render the answer based on the selected question */}
    </div>
  );
}
