"use client";
import React, { useState } from "react";

const Join = () => {
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setStatusMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("/api/collect-emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      console.log(result)

      if (response.ok) {
        setStatusMessage("Email added successfully!");
        setEmail("");
      } else {
        setStatusMessage(result.error || "Failed to add email.");
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      setStatusMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="text-center pb-40">
      <h1 className="text-[30px] sm:text-[40px] mb-2 font-medium">
        Become a Part of Sonify&apos;s Community
      </h1>
      <p className="font-light">
        Get notified when we&apos;re live! Join our waitlist by sharing your
        email below
      </p>
      <form
        className="flex justify-center mb-10 md:mb-0 gap-2 mt-10 items-center"
      >
        <input
          placeholder="Your Email Address..."
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-[rgba(165,_122,_255,_0.05)] outline-none border border-[#4C3177] rounded-md py-3 px-4 max-w-[300px] w-full text-sm"
        />
        <button
          type="submit"
          className="shrink-0 bg-[#272728] py-3 px-4 rounded-md font-light"
          onClick={handleSubmit}
        >
          Join Waitlist
        </button>
      </form>
      {statusMessage && <p className="mt-4 text-sm">{statusMessage}</p>}{" "}
    </div>
  );
};

export default Join;
