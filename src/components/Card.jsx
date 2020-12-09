import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card" style={{ width: "18rem" }}>
          <img
            height="200"
            width="150"
            src={props.imgPath}
            className="card-img-top"
            alt="Logo"
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.subtitle}</p>
            <NavLink to="https://www.google.com" className="btn btn-primary">
              Get Details
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
