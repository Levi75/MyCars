import React from "react";
import Styles from "./App.module.scss";
import { Route, Link, Switch } from "react-router-dom";
import CreateCar from "./containers/createCar/CreateCar";
import CreateUser from "./containers/createUser/CreateUser";
import DisplayCars from "./containers/displayCars/DisplayCars";
import DisplayUsers from "./containers/displayUsers/DisplayUsers";
import Garage from "./containers/garage/Garage";
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink } from "mdbreact";

import Test from "./components/Test";

function App() {
  const [activeLink, setActiveLink] = React.useState("сreate-сar");

  return (
    <div className={Styles.Body}>
      <MDBNavbar color="primary-color-dark" dark expand="md">
        <MDBNavbarNav center>
          <MDBNavItem
            // active={true}
            active={activeLink === "сreate-сar" && true}
            onClick={() => setActiveLink("сreate-сar")}
          >
            <MDBNavLink to="/сreate-сar">Create Car</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem
            active={activeLink === "сreate-user" && true}
            onClick={() => setActiveLink("сreate-user")}
          >
            <MDBNavLink to="/сreate-user">Create User</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem
            active={activeLink === "display-car" && true}
            onClick={() => setActiveLink("display-car")}
          >
            <MDBNavLink to="/display-car">Display Cars</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem
            active={activeLink === "display-user" && true}
            onClick={() => setActiveLink("display-user")}
          >
            <MDBNavLink to="/display-user">Display Users</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem
            active={activeLink === "test" && true}
            onClick={() => setActiveLink("test")}
          >
            <MDBNavLink to="/test">Test</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBNavbar>

      <Switch>
        <Route path="/сreate-сar" component={CreateCar} />
        <Route path="/сreate-user" component={CreateUser} />
        <Route path="/display-car" component={DisplayCars} />
        <Route path="/display-user" component={DisplayUsers} />
        <Route path="/garage/:id" component={Garage} />
        <Route path="/test" component={Test} />
      </Switch>
    </div>
  );
}

export default App;
