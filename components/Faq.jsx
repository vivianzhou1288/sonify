"use client";
import { ArrowDown } from "lucide-react";
import React, { useState } from "react";

const Faq = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    { question: "Question 1", answer: "Answer to question 1" },
    { question: "Question 2", answer: "Answer to question 2" },
    { question: "Question 3", answer: "Answer to question 3" },
  ];

  return (
    <div className="pb-40 text-center max-w-[900px] mx-auto">
      <h1 className="text-[40px] mb-8 font-medium">
        Frequently Asked Questions
      </h1>
      <div className="text-left">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#272728] text-white mb-4 p-4 rounded-md shadow-md cursor-pointer"
            onClick={() => toggleFaq(index)}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              <ArrowDown
                className={`transition-transform duration-300 ${
                  openFaqIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            {openFaqIndex === index && <p className="mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
