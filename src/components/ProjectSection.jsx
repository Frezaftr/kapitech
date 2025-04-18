// src/components/ProjectSection.jsx
import React from "react";

const projects = [
  {
    id: "01",
    title: "Pertamina",
    categories: "App Design / Branding / Graphic Design / Packaging Design / UI/UX / Web Design",
    image: "/assets/Projectpertamina.jpg", 
  },
  {
    id: "02",
    title: "BKKBN",
    categories: "social media / video ads",
    image: "/assets/ProjectBKKBN.svg",
  },
  {
    id: "03",
    title: "Markplus, INC - Bank BTN",
    categories: "video bumper / 2D animation ",
    image: "/assets/projectBankBtnMark.jpg",
  },
  {
    id: "04",
    title: "Ina Solusi Indonesia",
    categories: "custom website development / company profile website",
    image: "/assets/ProjectINA.jpg",
  },
  {
    id: "05",
    title: "Saguruku Andalan Pratama",
    categories: "custom wesite development",
    image: "/assets/ProjectSAP.jpg",
  },
  {
    id: "06",
    title: "Navees",
    categories: "video production / video editing / photo product / social media / video ads",
    image: "/assets/ProjectNavees.jpg",
  },
];

const ProjectSection = () => {
  return (
    <section className="px-4 md:px-10 py-16 bg-white text-black">
      <h2 className="text-sm mb-10">KTA® Select Portfolio Work | 2024</h2>

      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        <div className="flex gap-6 w-max">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-[500px] flex-shrink-0"
            >
              <div className="w-full h-[400px] overflow-hidden rounded-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Deskripsi Project */}
              <div className="flex items-start mt-4 space-x-2">
                <span className="text-xs border border-black rounded-full w-6 h-6 flex items-center justify-center font-medium">
                  {project.id}
                </span>
                <div>
                  <p className="font-semibold text-sm">{project.title}</p>
                  <p className="text-xs text-gray-600">{project.categories}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <a
          href="/projects"
          className="text-sm text-red-600 flex items-center gap-2 hover:underline"
        >
          View all projects <span className="text-xl">›</span>
        </a>
      </div>
    </section>
  );
};

export default ProjectSection;
