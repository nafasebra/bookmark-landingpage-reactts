import { useState } from "react";
import { faqs } from "../data";
import FaqItem from "./FaqItem";

function Faq() {
  const [current, setCurrent] = useState<number>(0);
  const [numClick, setNumClick] = useState<number>(0);

  const setCurrentFaqItem = (index: number): void => {
    if(index === current) setNumClick(numClick + 1);
    else setNumClick(0);
    setCurrent(index);
  };

  return (
    <div className="py-8">
      {faqs?.map((item, index) => (
        <FaqItem
          key={index}
          setChangeItem={() => setCurrentFaqItem(index)}
          question={item.question}
          answer={item.answer}
          isShow={current === index && numClick < 1}
        />
      ))}
    </div>
  );
}

export default Faq;
