import React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Hero } from "./components/Hero/Hero";
import BgImage from "./assets/bg.png";
import { Equipments } from "./components/Equipments/Equipments";
import Banner from "./components/Banner/Banner.jsx";
import Img1 from "./assets/2.png";
import Img2 from "./assets/3.png";
import TabComp from "./components/Tab/TabComp.jsx";
import Testimonial from "./components/testimonial/Testimonial.jsx";
import Banner2 from "./components/Banner/Banner2.jsx";
import Footer from "./components/Footer/Footer.jsx";

const BannerData = {
  img: Img1,
  title: "Lorem ipsum dolor sit amet.",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptatum fugiat vero incidunt tempora.",
  link: "#",
};
const Banner2Data = {
  img: Img2,
  title: "Lorem ipsum dolor sit amet.",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptatum fugiat vero incidunt tempora.",
  link: "#",
};

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <div style={bgStyle}>
          <NavBar />
          <Hero />
        </div>
        <Equipments />
        <Banner {...BannerData} />
        <TabComp/>
        <Banner {...Banner2Data} />
        <Testimonial/>
        <Banner2/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
