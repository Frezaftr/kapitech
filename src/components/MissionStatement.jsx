import React from "react";
import { motion } from "framer-motion";

const MissionStatement = () => {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-6 md:px-10 py-16">
      <motion.div
        className="max-w-6xl text-black font-semibold text-[36px] sm:text-[48px] md:text-[64px] leading-tight relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="relative leading-tight">
          <span className="absolute -left-4 -top-6 text-red-600 text-[48px] sm:text-[64px] md:text-[80px] leading-none">
            “
          </span>
          <span className="block pl-8">
            KTA<sup>®</sup> creates innovative designs<br />
            that inspire and motivate.<br />
            Collaborate with our digital<br />
            agency to bring a profound sense<br />
            of pride and accomplishment.
          </span>
          <span className="absolute -right-4 -bottom-6 text-red-600 text-[48px] sm:text-[64px] md:text-[80px] leading-none">
            ”
          </span>
        </p>
      </motion.div>
    </section>
  );
};

export default MissionStatement;
