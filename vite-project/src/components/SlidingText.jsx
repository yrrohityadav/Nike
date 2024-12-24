import { useState, useEffect } from "react";

const SlidingText = () => {
  const [currentText, setCurrentText] = useState(0);

  const texts = [
    "New Styles On Sale: Up To 40% Off\n\nShop All Our New Markdowns",
    <>
      Move, Shop, Customise & Celebrate With Us
      <br />
      <span style={{ fontSize: "0.9rem", display: "block", marginTop: "0.5rem" }}>
        No matter what you feel like doing today, It’s better as a Member.
        <br />
        <strong>Join Us</strong>
      </span>
    </>,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div
      className="h-20 flex items-center justify-center bg-white text-black text-center transition-all duration-500 ease-in-out"
      style={{ fontFamily: "Arial, sans-serif", fontSize: "1.2rem", lineHeight: "1.5" }}
    >
      <p>{texts[currentText]}</p>
    </div>
  );
};

export default SlidingText;
