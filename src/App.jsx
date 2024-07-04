import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/services/Services";
import ServiceDetail from "./components/services/ServiceDetail";
import { Route, Routes } from "react-router-dom";
import Mywork from "./components/Mywork/Mywork";
import Contact from "./components/Contact/Contact";
import Testimonial from "./components/testimonial/Testimonial";
import Title from "./components/Title/Title";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      {/* <Mywork /> */}
      <Title title="My Projects" />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default App;
