import React, { useState } from "react";
import pertaminaImg from "../assets/pertaminaProject.png"; // Sesuaikan path-nya

const projects = [
  {
    id: 1,
    image: pertaminaImg,
    client: "Pertamina",
    services: "Web Design / Branding / UI/UX / Graphic Design",
  },
  // Tambahkan project lainnya di sini jika perlu
];

const ProjectHighlight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-[#f3f3f3] py-16 px-4 md:px-20 text-black">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* LEFT: Gambar + Navigasi */}
        <div className="relative w-full lg:w-2/3">
          <img
            src={currentProject.image}
            alt={currentProject.client}
            className="w-full h-auto object-cover rounded-lg"
          />

          {/* Tombol kiri */}
          <button
            onClick={prevProject}
            className="absolute top-1/2 -translate-y-1/2 left-3 text-black text-3xl md:text-4xl bg-white bg-opacity-70 hover:bg-opacity-100 transition rounded-full px-2 py-1"
          >
            &#10094;
          </button>

          {/* Tombol kanan */}
          <button
            onClick={nextProject}
            className="absolute top-1/2 -translate-y-1/2 right-3 text-black text-3xl md:text-4xl bg-white bg-opacity-70 hover:bg-opacity-100 transition rounded-full px-2 py-1"
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
          {[...Array(projects.length)].map((_, idx) => (
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
          <button onClick={prevProject} className="text-xl">
            &#10094;
          </button>
          <span className="text-sm w-6 text-center">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          <button onClick={nextProject} className="text-xl">
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlight;
