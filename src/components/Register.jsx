import {
  Backdrop,
  Button,
  Card,
  CardContent,
  CircularProgress,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Snackbar,
} from "@material-ui/core";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";
import {
  EmailRounded,
  AccountCircle,
  Visibility,
  VisibilityOff,
} from "@material-ui/icons";
import clsx from "clsx";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Register = () => {
  const classes = useStyles();

  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    showPassword: false,
    errors: {
      username: "",
      email: "",
      password: "",
    },
  });
  const [open, setOpen] = useState(false);
  const [isAlert, setAlert] = useState(false);
  const [isError, setError] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert(false);
    setError(false);
  };

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
    switch (name) {
      case "username":
        formValues.errors.username =
          value.length < 5 ? "Full Name must be 5 characters long!" : "";
        break;
      case "email":
        //formValues.errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        formValues.errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      default:
        break;
    }
  };

  const handleClickShowPassword = () => {
    setFormValues({ ...formValues, showPassword: !formValues.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
    setFormValues((previousValue) => {
      return {
        ...previousValue,
      };
    });

    var apiBaseUrl = "http://localhost:3005/api/ananya/";
    var payload = {
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
    };

    async function registerData() {
      const response = await Axios.post(apiBaseUrl + "register", payload);
      console.log(response.data);
      alert(response.data.Response.Details);
      setOpen(false);
      response.data.Response.Code === 1000 ? setAlert(true) : setError(true);
    }
    registerData();
  };

  return (
    <>
      <Card className="container mt-5 border">
        <CardContent>
          <div className="my-5 mr-5">
            <h1 className="text-center">Member Registration</h1>
          </div>
          <div className="container contact_div">
            <div className="row">
              <div className="col-md-6 col-10 mx-auto">
                <form className="mb-2" onSubmit={formSubmit}>
                  <div className="mb-2">
                    <div className="col-sm-10">
                      {/* <TextField
                        style={{ width: "100%" }}
                        id="outlined-error-helper-text"
                        label="Username"
                        name="username"
                        value={formValues.username}
                        onChange={inputEvent}
                        variant="outlined"
                      /> */}

                      <FormControl
                        style={{ width: "100%" }}
                        className={clsx(classes.margin, classes.textField)}
                        variant="outlined"
                      >
                        <InputLabel htmlFor="outlined-adornment-username">
                          Username
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-username"
                          value={formValues.username}
                          name="username"
                          onChange={inputEvent}
                          startAdornment={
                            <InputAdornment position="start">
                              <AccountCircle />
                            </InputAdornment>
                          }
                          labelWidth={75}
                        />
                      </FormControl>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="col-sm-10">
                      {/* <TextField
                        style={{ width: "100%" }}
                        id="outlined-error-helper-text"
                        label="Email"
                        name="email"
                        placeholder="name@example.com"
                        value={formValues.email}
                        onChange={inputEvent}
                        variant="outlined"
                      /> */}
                      <FormControl
                        style={{ width: "100%" }}
                        className={clsx(classes.margin, classes.textField)}
                        variant="outlined"
                      >
                        <InputLabel htmlFor="outlined-adornment-email">
                          Email
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-email"
                          value={formValues.email}
                          name="email"
                          onChange={inputEvent}
                          startAdornment={
                            <InputAdornment position="start">
                              <EmailRounded />
                            </InputAdornment>
                          }
                          labelWidth={40}
                        />
                      </FormControl>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="col-sm-10">
                      {/* <TextField
                        style={{ width: "100%" }}
                        id="outlined-error-helper-text"
                        label="Password"
                        name="password"
                        placeholder="password"
                        value={formValues.password}
                        onChange={inputEvent}
                        variant="outlined"
                      /> */}

                      <FormControl
                        style={{ width: "100%" }}
                        className={clsx(classes.margin, classes.textField)}
                        variant="outlined"
                      >
                        <InputLabel htmlFor="outlined-adornment-password">
                          Password
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-password"
                          type={formValues.showPassword ? "text" : "password"}
                          value={formValues.password}
                          name="password"
                          onChange={inputEvent}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {formValues.showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          labelWidth={70}
                        />
                      </FormControl>
                    </div>
                  </div>
                  <div className="col-12 mt-3">
                    <Button
                      style={{ width: "82%" }}
                      variant="outlined"
                      color="primary"
                      type="submit"
                    >
                      Register Now
                    </Button>
                  </div>
                  <div>
                    <p className="text-center mr-5 mt-2">
                      Already Registered.
                      <NavLink to="/">Login Now</NavLink>
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
      <Snackbar open={isAlert} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          User registered Successfully!!
        </Alert>
      </Snackbar>
      <Snackbar open={isError} autoHideDuration={2000} onClose={handleClose}>
        <Alert severity="error">User Registration Failed!!</Alert>
      </Snackbar>
    </>
  );
};

export default Register;
