import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-[#f3f3f3] text-black px-6 md:px-20 py-24">
      <motion.div
        className="max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-[22px] md:text-[24px] leading-relaxed font-medium">
          Kapitech is a leading digital agency based in Jakarta, Indonesia,
          offering a wide range of services to help businesses thrive in the
          digital landscape. With our commitment to innovation, creativity, and
          delivering exceptional results, we are the ideal partner for companies
          seeking personalized and effective digital solutions.{" "}
          <Link
            to="/work"
            className="group text-red-500 font-semibold hover:underline transition"
          >
            See our work{" "}
            <span className="inline-block transform group-hover:translate-x-1 transition">
              ›
            </span>
          </Link>
        </p>

        <div className="mt-10">
          <Link
            to="/about-kta"
            className="group text-red-500 font-semibold text-lg hover:underline transition"
          >
            About KTA®{" "}
            <span className="inline-block transform group-hover:translate-x-1 transition">
              ›
            </span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
