import React, { useState } from "react";
import bgImage from "../assets/Backgroud2-GetInTouch.jpg";

const interests = [
  "Branding", "Web Design", "Packaging", "Graphic Design",
  "UI/UX", "Web Dev", "Logo", "Brand Assets", "Event",
  "Web Maintenance", "Other"
];

const GetInTouch = () => {
  const [selected, setSelected] = useState([]);

  const toggleInterest = (item) => {
    setSelected((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item) // unselect
        : [...prev, item] // select
    );
  };

  return (
    <section
      className="relative bg-cover bg-center text-white px-6 py-24"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-10">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Get in Touch with KTA<sup>®</sup>
        </h2>

        <div className="space-y-4 text-left">
          <input
            type="text"
            placeholder="Your name*"
            className="w-full bg-transparent border-b border-white py-2 placeholder-white outline-none"
          />
          <input
            type="email"
            placeholder="Your e-mail*"
            className="w-full bg-transparent border-b border-white py-2 placeholder-white outline-none"
          />
          <textarea
            placeholder="Tell us about your project..."
            rows="3"
            className="w-full bg-transparent border-b border-white py-2 placeholder-white outline-none"
          />
        </div>

        <div className="text-left space-y-2">
          <p className="text-sm">I'm interested in...</p>
          <div className="flex flex-wrap gap-2">
            {interests.map((item, index) => {
              const isSelected = selected.includes(item);
              return (
                <button
                  key={index}
                  onClick={() => toggleInterest(item)}
                  className={`text-xs px-3 py-1 rounded-full transition border
                    ${isSelected
                      ? "bg-white text-black border-white"
                      : "bg-white/10 text-white border-white/30 hover:bg-white/20"}`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <button className="mx-auto mt-4 px-6 py-2 bg-red-600 text-white rounded-full hover:scale-105 transition">
          Send
        </button>
      </div>
    </section>
  );
};

export default GetInTouch;
