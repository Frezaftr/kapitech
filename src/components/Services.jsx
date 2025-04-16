// src/components/Services.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Website",
    description:
      " We provides tailored website solutions to meet your business needs. We design and develop websites that are responsive, user-friendly, and aligned with your brand. Whether you need a company profile, e-commerce platform, or a unique web application, we ensure your website is functional, professional, and easy to manage.",
    tags: ["Corporate Website", "E-Commerce", "Landing Page"],
  },
  {
    title: "E-Commerce",
    description:
      "Crafting brand identities that resonate and endure. We develop visual and verbal brand systems that speak clearly and memoWe offers custom online store solutions designed to help you sell products easily and efficiently. We build responsive, secure, and user-friendly e-commerce websites that suit your brand and business goals. From product management to payment integration, we ensure a smooth shopping experience for your customers and easy management for you.rably.",
    tags: ["Logo", "Brand Guidelines", "Naming"],
  },
  {
    title: "Custom Website UI/UX",
    description:
      "We create intuitive and engaging digital interfaces, ensuring users have seamless experiences across every touchpoint.",
    tags: ["User Flow", "Wireframes", "Prototyping"],
  },
  {
    title: "Motion & Graphic Design",
    description:
      "logo design, brand identity, social media content, marketing collateral, packaging design, presentation design, infographic, animated logo, explaner video, social media motion, product animation, UI/UX animation, kinetic typography, event opening video",
    tags: ["Virtual Booth", "Interactive Walkthrough", "3D Modeling"],
  },
  {
    title: "Website support",
    description:
      " regular maintenance, bug fixes, content updates, backup & recovery, security monitoring, performance optimization, technical support, plugin/software updates, uptime monitoring",
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
