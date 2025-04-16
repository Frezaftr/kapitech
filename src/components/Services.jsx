// src/components/Services.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "We specialize in developing top-tier websites through the incorporation of contemporary design methodologies. The integration of mobile-first principles and seamless web experiences is imperative for the triumph of your online initiative. Our team is committed to upholding bespoke originality while placing a strong emphasis on responsive design, meticulously optimizing your website for various devices and interfaces. The end result will be a new website designed to allure coveted target audiences, enhance user engagement, stimulate sales, and ultimately elevate the brand value of your business.",
    tags: ["Corporate Website", "E-Commerce", "Landing Page"],
  },
  {
    title: "Branding & Identity",
    description:
      "Crafting brand identities that resonate and endure. We develop visual and verbal brand systems that speak clearly and memorably.",
    tags: ["Logo", "Brand Guidelines", "Naming"],
  },
  {
    title: "UI / UX Design",
    description:
      "We create intuitive and engaging digital interfaces, ensuring users have seamless experiences across every touchpoint.",
    tags: ["User Flow", "Wireframes", "Prototyping"],
  },
  {
    title: "3D Event Model",
    description:
      "Immersive 3D experiences for virtual events, exhibitions, and presentations. Designed for impact and memorability.",
    tags: ["Virtual Booth", "Interactive Walkthrough", "3D Modeling"],
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="px-6 md:px-20 py-24 text-black bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
        {/* Left Service List */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <h3 className="text-sm uppercase tracking-widest text-gray-500">Services</h3>
          <ul className="mt-4 flex flex-col gap-4">
            {services.map((service, index) => (
              <li
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer transition-all duration-200 ${
                  activeIndex === index
                    ? "text-black font-bold text-2xl"
                    : "text-gray-400 font-medium text-xl"
                }`}
              >
                <span className="mr-4 text-base font-normal text-gray-400">
                  {`0${index + 1}`}
                </span>
                {service.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Detail */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 flex flex-col gap-6"
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {services[activeIndex].tags.map((tag, i) => (
              <span
                key={i}
                className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-lg leading-relaxed text-gray-700">
            {services[activeIndex].description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
