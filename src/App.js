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
  const [collapse1, setCollapse1] = React.useState(false);
  const [collapseID, setCollapseID] = React.useState("");

  // const toggleCollapse = (collapseID) => () => {
  //   this.setState((prevState) => ({
  //     collapseID: prevState.collapseID !== collapseID ? collapseID : "",
  //   }));
  // };

  const toggleSingleCollapse = (collapseId) => {
    setCollapseID({
      ...collapseId,
      [collapseId]: [collapseId],
    });
  };

  // const toggleCollapse = ()

  return (
    <div className={Styles.Body}>
      <div>
        <MDBNavbar color="primary-color-dark" dark expand="md">
          <MDBNavbarNav center>
            <MDBNavItem>
              <MDBNavLink to="/сreate-сar">Create Car</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/сreate-user">Create User</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/display-car">Display Cars</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active>
              <MDBNavLink to="/display-user">Display Users</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/test">Test</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBNavbar>
      </div>
      <div>
        <Switch>
          <Route path="/сreate-сar" component={CreateCar} />
          <Route path="/сreate-user" component={CreateUser} />
          <Route path="/display-car" component={DisplayCars} />
          <Route path="/display-user" component={DisplayUsers} />
          <Route path="/garage/:id" component={Garage} />
          <Route path="/test" component={Test} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
