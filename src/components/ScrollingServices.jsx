import React from "react";

const services = [
  "Digital Imaging",
  "Creative Design",
  "Design Implementation",
  "Event 3D Set",
  "UI / UX",
  "Custom Web Development",
  "Maintenance Web",
];

const ScrollingServices = () => {
  return (
    <div className="w-full overflow-hidden bg-black py-2 border-t border-b border-neutral-700">
      <div className="whitespace-nowrap animate-marquee flex gap-10 text-white text-sm md:text-base font-light px-4">
        {Array(2).fill(services).flat().map((item, idx) => (
          <span key={idx} className="flex items-center gap-1">
            {item}
            <span className="text-red-500">&gt;</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingServices;
