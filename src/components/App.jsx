import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
import LogIn from "./LogIn";
import Logout from "./Logout";
import Register from "./Register";

const App = () => {
  const [isAuthenticated, setStatus] = useState(false);

  const validate = (isAuthenticated) => {
    setStatus(isAuthenticated);
  };

  const renderRedirect = () => {
    if (isAuthenticated) {
      return <Redirect to="/home" />;
    }
  };

  return (
    <>
      <div>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/register" component={Register} />
          <Route
            exact
            path="/"
            component={() => <LogIn onLogIn={validate} />}
          />
          <Redirect to="/" />
        </Switch>
        {renderRedirect()}
      </div>
    </>
  );
};

export default App;
