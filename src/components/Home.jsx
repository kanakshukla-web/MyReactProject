import React from "react";
import "../index.css";
import Common from "./Common";
import NavBar from "./NavBar";
import Footer from "./Footer";

//import web from '../images/animated.gif';

const Home = () => {
  return (
    <>
      <NavBar />
      <Common
        name="Grow your buisnees with"
        companyname="Ananya Texttiles"
        subtitle="We are the team of excellent employess"
        buttonName="Get Started"
        visit="/services"
        path="https://thapatechnical.github.io/reactlivewebsite/static/media/img2.e981619f.svg"
      />
      <Footer />
    </>
  );
};

export default Home;
