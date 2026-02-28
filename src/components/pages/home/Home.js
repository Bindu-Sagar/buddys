import React from "react";
import "./home.css";

import HeroSlider from "./heroslider/HeroSlider";
import Review from "./review/Review";
import Staff from "./staff/Staff";
import Contact from "../../contact/Contact";
import Info from "./info/Info";
import SplitSection from "./splitsection/SplitSection";

export default function Home() {
  return (
    <main className="home" id="home">
      <HeroSlider />
      <Info/>
      <SplitSection/>
      <Staff/>
      <Review/>
      <Contact />


    </main>
  );
}