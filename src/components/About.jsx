import React from "react";
import "../index.css";
import Common from "./Common";
import Footer from "./Footer";
import NavBar from "./NavBar";

const About = () => {
  return (
    <>
      <NavBar />
      <Common
        name="Welcome to About Page"
        companyname="Ananya Texttiles"
        subtitle="We are the team of excellent employess"
        buttonName="Contact Now"
        visit="/contact"
        path="https://nebula.wsimg.com/a5c800c29a1e2a446220951587a091b8?AccessKeyId=6320A15AEFB56DE9C58C&disposition=0&alloworigin=1"
      />
      <Footer />
    </>
  );
};

export default About;
