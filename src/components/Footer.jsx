// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-20 text-sm">
      <div className="max-w-7xl mx-auto">
        {/* Top CTA */}
        <div className="mb-16">
          <p className="text-[22px] md:text-[30px] font-medium leading-snug">
            Starting a new project or want to <br className="hidden md:block" />
            collaborate with us?{" "}
            <span className="text-red-600 inline-block">
              Let’s talk <span className="text-xl ml-1">›</span>
            </span>
          </p>
          <p className="mt-4 text-gray-400 text-lg md:text-xl">hello@kta.com</p>
        </div>

        {/* Grid columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-xs text-gray-300">
          {/* Company */}
          <div>
            <h4 className="text-white font-medium mb-3 border-t border-white/30 pt-3">Company</h4>
            <ul className="space-y-2">
              <li>Work</li>
              <li>Agency</li>
              <li>Services</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-medium mb-3 border-t border-white/30 pt-3">Services</h4>
            <ul className="space-y-2">
              <li>Web Design</li>
              <li>Web Maintenance</li>
              <li>Branding & Identity</li>
              <li>3D Event Set</li>
              <li>Graphic Design</li>
              <li>Design Implementation</li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-white font-medium mb-3 border-t border-white/30 pt-3">Address</h4>
            <ul className="space-y-2">
              <li>-</li>
              <li>Jakarta Selatan, Indonesia</li>
              <li>-</li>
              <li>+62 813 1193 9499</li>
              <li>hello@kta.com</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-medium mb-3 border-t border-white/30 pt-3">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://www.instagram.com/kapitechagency/profilecard/?igsh=OWpndjFudDVvbzBh" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Instagram
                </a>
              </li>
              <li>Dribbble</li>
              <li>
                <a href="https://www.behance.net/kapitechagency/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Behance
                </a>
              </li>
              <li>
                <a href="mailto:Kapitechagency@gmail.com" className="hover:underline">
                Email
                </a>
                </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-16 text-center text-xs text-gray-500 space-y-2">
          <p>
            Copyright © 2023 Kapitech Digital Indonesia LLC • Headquartered in South Jakarta & Beyond
          </p>
          <p className="text-white text-xs">All rights reserved <span className="text-red-500">❤️</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
