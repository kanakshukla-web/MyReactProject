import { Backdrop, CircularProgress } from "@material-ui/core";
import Axios from "axios";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { setUserSession } from "../Utils/Common";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

(function () {
  console.log("Called LogIN Paga");
})();

const LogIn = (props) => {
  const classes = useStyles();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [open, setOpen] = React.useState(false);

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
    setOpen(true);
    setFormValues((previousValue) => {
      return {
        ...previousValue,
        status: "success",
      };
    });
    //props.onLogIn(formValues);

    var apiBaseUrl = "http://localhost:3005/api/ananya/";
    var payload = {
      email: formValues.email,
      password: formValues.password,
    };

    async function getData() {
      const response = await Axios.post(apiBaseUrl + "logIn", payload);
      console.log(response.data);
      setOpen(false);
      if (response.data.Response.Code === 1000) {
        console.log("Login successfull");
        setUserSession(response.data.token, response.data.user);
        props.onLogIn(formValues);
      } else if (response.data.Response.Code === 1001) {
        console.log("Username password do not match");
        alert("username password do not match");
      } else {
        console.log("Username does not exists");
        alert("Username does not exist");
      }
    }
    getData();
  };

  return (
    <>
      <Card className="container mt-5 border">
        <CardContent>
          <div className="my-5">
            <h1 className="text-center">Welcome Back:)</h1>
            <h4 className="text-center">
              To keep connected with us please logIn with your personal
              information by email address and password
            </h4>
          </div>
          <div className="container contact_div">
            <div className="row">
              <div className="col-md-6 col-10 mx-auto">
                <form className="mb-2" onSubmit={formSubmit}>
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
                        id="email"
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <label className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                      <input
                        name="password"
                        value={formValues.password}
                        onChange={inputEvent}
                        placeholder="your password"
                        type="password"
                        className="form-control"
                        id="password"
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      style={{ display: "inline-block", marginLeft: "5%" }}
                      className="form-check"
                    >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label className="form-check-label">Remember Me</label>
                    </div>
                    <div style={{ display: "inline-block", marginLeft: "30%" }}>
                      <a href="https://www.google.com">Forgot Password</a>
                    </div>
                  </div>
                  <div className="col-12 mt-3">
                    <button
                      style={{ width: "82%" }}
                      type="submit"
                      className="btn btn-outline-primary"
                    >
                      LogIn Now
                    </button>
                  </div>
                  <div>
                    <p className="text-center mr-5 mt-2">
                      No account yet.
                      <NavLink to="/register">Register Now</NavLink>
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <Backdrop className={classes.backdrop} open={open}>
              <CircularProgress color="inherit" />
            </Backdrop>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default LogIn;
