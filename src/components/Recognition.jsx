import React from "react";

const Recognition = () => {
  return (
    <section className="w-full py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Kiri Atas */}
        <div className="w-full md:w-1/2">
          <h2 className="text-sm font-medium">KTA<sup>®</sup> Recognition</h2>
        </div>

        {/* Kanan Lebih Bawah */}
        <div className="w-full md:w-1/2 mt-16 space-y-12">
          {["Certifications", "Recognition", "Awards"].map((item, idx) => (
            <div key={idx} className="text-right">
              <h3 className="text-sm text-gray-500 mb-1">{item}</h3>
              <hr className="border-t border-gray-400/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recognition;
