import React from "react";
import Styles from "./App.module.scss";
import { Route, Link, Switch } from "react-router-dom";
import CreateCar from "./containers/CreateCar/CreateCar";
import CreateUser from "./containers/CreateUser/CreateUser";
import DisplayCars from "./containers/DisplayCars/DisplayCars";
import DisplayUsers from "./containers/DisplayUsers/DisplayUsers";
import Garage from "./containers/Garage/Garage";
import ChangeCar from "./containers/ChangeCar/ChangeCar";
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink } from "mdbreact";

import Test from "./components/Test";

function App() {
  const [activeLink, setActiveLink] = React.useState("сreate-сar");

  return (
    <div className={Styles.Body}>
      <MDBNavbar color="primary-color-dark" dark expand="md">
        <MDBNavbarNav center>
          <MDBNavItem
            active={activeLink === "сreate-сar" && true}
            onClick={() => setActiveLink("сreate-сar")}
          >
            <MDBNavLink to="/сreate-сar">Создание машины</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem
            active={activeLink === "сreate-user" && true}
            onClick={() => setActiveLink("сreate-user")}
          >
            <MDBNavLink to="/сreate-user">Создание пользователя</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem
            active={activeLink === "display-car" && true}
            onClick={() => setActiveLink("display-car")}
          >
            <MDBNavLink to="/display-car">Машины</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem
            active={activeLink === "display-user" && true}
            onClick={() => setActiveLink("display-user")}
          >
            <MDBNavLink to="/display-user">Пользователи</MDBNavLink>
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
        <Route path="/car-change/:id" component={ChangeCar} />
        <Route path="/test" component={Test} />
      </Switch>
    </div>
  );
}

export default App;
