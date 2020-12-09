import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Sdata from "./Sdata";

const Services = () => {
  return (
    <>
      <NavBar />
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              {Sdata.map((val, index) => {
                return (
                  <Card
                    key={index}
                    title={val.title}
                    subtitile={val.subtitle}
                    imgPath={val.imgSrc}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
