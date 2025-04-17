// src/components/ProjectHighlight.jsx
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import pertaminaImg from "../assets/pertaminaProject.png";
import inaIMG from "../assets/projectINA.jpg";
import markplusIMG from "../assets/projectMarkplus_BankBTN.jpg";
import naveesIMG from "../assets/projectNaveesGold.jpg";
import sapIMG from "../assets/projectSAP.jpg";

const projects = [
  {
    id: 1,
    image: pertaminaImg,
    client: "Pertamina",
    services: "Web Design / Branding / UI/UX / Graphic Design",
  },
  {
    id: 2,
    image: inaIMG,
    client: "INA",
    services: "Web Design / Branding / UI/UX / Graphic Design",
  },
  {
    id: 3,
    image: markplusIMG,
    client: "MARKPLUS",
    services: "Web Design / Branding / UI/UX / Graphic Design",
  },
  {
    id: 4,
    image: naveesIMG,
    client: "NAVEES GOLD",
    services: "Web Design / Branding / UI/UX / Graphic Design",
  },
  {
    id: 5,
    image: sapIMG,
    client: "SAP",
    services: "Web Design / Branding / UI/UX / Graphic Design",
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

const ProjectHighlight = () => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const currentProject = projects[currentIndex];

  const paginate = (dir) => {
    const newIndex = (currentIndex + dir + projects.length) % projects.length;
    setCurrentIndex([newIndex, dir]);
  };

  return (
    <section className="bg-[#f3f3f3] py-16 px-4 md:px-20 text-black">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* LEFT: Gambar + Navigasi */}
        <div className="relative w-full lg:w-2/3">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-lg">
            <AnimatePresence custom={direction} mode="wait">
              <motion.img
                key={currentProject.id}
                src={currentProject.image}
                alt={currentProject.client}
                className="w-full h-full object-cover"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>

          {/* Tombol kiri */}
          <button
            onClick={() => paginate(-1)}
            className="absolute top-1/2 -translate-y-1/2 left-3 text-black text-3xl md:text-4xl bg-white bg-opacity-10 hover:bg-opacity-100 transition rounded-full px-2 py-1"
          >
            &#10094;
          </button>

          {/* Tombol kanan */}
          <button
            onClick={() => paginate(1)}
            className="absolute top-1/2 -translate-y-1/2 right-3 text-black text-3xl md:text-4xl bg-white bg-opacity-10 hover:bg-opacity-100 transition rounded-full px-2 py-1"
          >
            &#10095;
          </button>
        </div>

        {/* RIGHT: Info Project */}
        <div className="w-full lg:w-1/3 flex flex-col justify-end">
          <div className="mt-6 lg:mt-auto">
            <h3 className="text-xl md:text-2xl font-semibold">{currentProject.client}</h3>
            <p className="text-sm md:text-base text-gray-600 mt-2">{currentProject.services}</p>
          </div>
        </div>
      </div>

      {/* Navigasi bawah */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Progress Bar */}
        <div className="flex-1 flex justify-center sm:justify-start gap-4">
          {projects.map((_, idx) => (
            <div
              key={idx}
              className={`h-[2px] w-[60px] md:w-[90px] ${
                idx === currentIndex ? "bg-black" : "bg-gray-400"
              } transition-all duration-300`}
            ></div>
          ))}
        </div>

        {/* Nomor & Tombol */}
        <div className="flex items-center gap-2 text-sm">
          <button onClick={() => paginate(-1)} className="text-xl">
            &#10094;
          </button>
          <span className="text-sm w-6 text-center">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          <button onClick={() => paginate(1)} className="text-xl">
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlight;
