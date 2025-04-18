import React from "react";
import { motion } from "framer-motion";

// Dummy logo imports
import logo1 from "../assets/Clients/LogoBank_BTN_logo.png";
import logo2 from "../assets/Clients/LogoFrenchKarateFederation.png.png";
import logo3 from "../assets/Clients/LogoINA.png";
import logo4 from "../assets/Clients/Logomamaway.png";
import logo5 from "../assets/Clients/LogoKompas.png";
import logo6 from "../assets/Clients/LogoMINew.png";
import logo7 from "../assets/Clients/LogoPertamina.png";
import logo8 from "../assets/Clients/Logonavees.png";
import logo9 from "../assets/Clients/Logosaguruku.jpg";
import logo10 from "../assets/Clients/LogoGamal.png";
import logo11 from "../assets/Clients/Logohalu.png";
import logo12 from "../assets/Clients/Logokartope.svg";
import logo13 from "../assets/Clients/Logomobilku.svg";
import logo14 from "../assets/Clients/LogoSmartChange.png";
// import logo15 from "../assets/Clients/pertaminaProject.png";

const clientLogos = [
  logo1, logo2, logo3, logo4, logo5,
  logo6, logo7, logo8, logo9,logo10,
  logo11, logo12, logo13, logo14,
];

const Clients = () => {
  return (
    <section className="bg-[#f3f3f3] px-4 md:px-10 py-24 text-black">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm uppercase font-semibold mb-10 tracking-wide">Clients</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 place-items-center">
          {clientLogos.map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.15 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grayscale hover:grayscale-0 transition duration-300 p-3 flex items-center justify-center"
            >
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="h-20 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <div className="w-full h-[1px] bg-gray-300 relative">
            <motion.div
              className="h-[2px] bg-black absolute left-0"
              initial={{ width: 0 }}
              whileInView={{ width: "20%" }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Clients;
