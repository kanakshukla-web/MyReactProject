import React from "react";
import "../index.css";

const year = new Date().getFullYear();
const Footer = () => {
  return (
    <>
      <footer className="w-100 bg-light text-center">
        <p>Copyright © {year} Ananya Insdustries. All rights reserved</p>
      </footer>
    </>
  );
};

export default Footer;
