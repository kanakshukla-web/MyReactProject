import React, { useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    alert(`
      My name is ${formValues.name}. 
      My email address is ${formValues.email}. 
      My phone number is ${formValues.mobile}. 
      My message is ${formValues.message}
    `);
    console.log(`${formValues}`);
  };

  return (
    <>
      <NavBar />
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form className="mb-2" onSubmit={formSubmit}>
              <div className="mb-2">
                <label className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                  <input
                    name="name"
                    value={formValues.name}
                    onChange={inputEvent}
                    placeholder="Enter your name"
                    type="text"
                    className="form-control"
                    id="Name"
                  />
                </div>
              </div>
              <div className="mb-2">
                <label className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input
                    name="email"
                    value={formValues.email}
                    onChange={inputEvent}
                    placeholder="name@example.com"
                    type="text"
                    className="form-control"
                    id="Email"
                  />
                </div>
              </div>
              <div className="mb-2">
                <label className="col-sm-2 col-form-label">Phone</label>
                <div className="col-sm-10">
                  <input
                    name="mobile"
                    value={formValues.mobile}
                    onChange={inputEvent}
                    placeholder="mobile number"
                    type="number"
                    maxLength="10"
                    className="form-control"
                    id="mobile"
                  />
                </div>
              </div>
              <div className="mb-2">
                <label className="col-sm-2 col-form-label">Message</label>
                <div className="col-sm-10">
                  <textarea
                    name="message"
                    value={formValues.message}
                    onChange={inputEvent}
                    placeholder="Enter your message"
                    type="text"
                    rows="3"
                    className="form-control"
                    id="message"
                  />
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-outline-primary">
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
