import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/assets/BackgroundHome.png')" }}
    >
      {/* Overlay gelap */}
      {/* <div className="absolute inset-0 bg-black/60" /> */}

      {/* Konten tengah */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 md:px-20">
        <motion.h1
          className="text-[72px] md:text-[90px] font-bold leading-[1.1] max-w-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          KTA® we 
          <div>
          Design and Develope
          </div>
        </motion.h1>

        <motion.p
          className="mt-6 text-xl md:text-2xl max-w-3xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Kapitech is a creative agency focused on strategy, design and development.
          We build modern brands that move.
        </motion.p>
      </div>

      {/* Tombol kanan bawah */}
      <motion.div
        className="absolute bottom-10 right-10 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <button className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full font-medium transition">
          Explore Work
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
