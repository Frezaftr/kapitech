import React from "react";
import "./index.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ScrollingServices from "./components/ScrollingServices";
import ProjectHighlight from "./components/ProjectHighlight";
import About from "./components/About";
import Clients from "./components/Clients";
import Services from "./components/Services";
import GetInTouch from "./components/GetInTouch";
import MissionStatement from "./components/MissionStatement";
import Recognition from "./components/Recognition";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ScrollingServices />
      <ProjectHighlight /> {/* Tambahkan ini */}
      <About/>
      <Clients/>
      <Services/>
      <GetInTouch/>
      <MissionStatement/>
      <Recognition/>
      <ProjectSection/>
      <Footer/>
    </div>
  );
}

export default App;
