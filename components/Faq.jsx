"use client";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import Blur2 from "@/public/blur-2.png";

const Faq = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "Why should I choose Sonify?",
      answer:
        "Sonify provides personalized music recommendations based on your listening habits, ensuring that you discover new songs and artists you'll love. We analyze your preferences to create curated playlists that match your unique taste.",
    },
    {
      question: "How does Sonify make music recommendations?",
      answer:
        "Sonify uses AI algorithms to analyze your Spotify listening history, including the genres, artists, and songs you frequently listen to. By understanding your preferences, Sonify generates customized playlists and song suggestions to match your musical tastes.",
    },
    {
      question: "Is Sonify free to use?",
      answer:
        "Yes, Sonify is free to use. You can connect your Spotify account and start receiving personalized music recommendations without any subscription fees. We offer premium features for users who want an enhanced experience, but the core functionalities are available at no cost.",
    },
    {
      question: "Can I add the recommended songs to my Spotify playlists?",
      answer:
        "Absolutely! With Sonify, you can easily add any of the recommended songs directly to your existing Spotify playlists or create new ones. Our seamless integration with Spotify makes managing your music library simple and intuitive.",
    },
  ];

  return (
    <div
      className=" relative pb-40 text-center max-w-[900px] mx-auto mt-5"
      id="faq"
    >
      <Image
        src={Blur2}
        alt=""
        className="absolute top-[-124px] left-[-200px] sm:left-[-300px] sm:top-[-324px] z-[-34] w-full"
      />
      <h1 className="text-[30px] sm:text-[40px] mb-8 font-medium">
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
