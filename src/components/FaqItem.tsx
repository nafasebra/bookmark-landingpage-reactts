import React from "react";

type porps = {
  question: string;
  answer: string;
  isShow: boolean;
  setChangeItem: () => void;
};

function FaqItem(props: porps) {
  const { question, answer, isShow, setChangeItem } = props;

  return (
    <div
      onClick={setChangeItem}
      className="border-b-[1px] border-gray-300"
    >
      <div className="flex items-center justify-between text-gray-800 hover:text-red cursor-pointer py-5">
        <p className="font-semibold">{question}</p>
        <div className={isShow ? `text-red rotate-180` : `text-blue rotate-0`}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      <div
        className={`text-sm opacity-70 overflow-hidden ${
          isShow ? "max-h-[400px] pb-4" : "max-h-0 pb-0"
        }`}
      >
        {answer}
      </div>
    </div>
  );
}

export default FaqItem;
