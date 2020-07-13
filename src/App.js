import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import CreateCar from "./containers/createCar/CreateCar";
import CreateUser from "./containers/createUser/CreateUser";
import DisplayCars from "./containers/displayCars/DisplayCars";
import DisplayUsers from "./containers/displayUsers/DisplayUsers";
import Garage from "./containers/garage/Garage";

function App() {
  return (
    <>
      <div>
        <p>
          <Link to="/сreate-сar">Create Car </Link>
        </p>
        <p>
          <Link to="/сreate-user">Create User</Link>
        </p>
        <p>
          <Link to="/display-car">Display Cars</Link>
        </p>
        <p>
          <Link to="/display-user">Display Users</Link>
        </p>
        <p>
          <Link to="/display-user">Display Users</Link>
        </p>
      </div>
      <div>
        <Switch>
          <Route path="/сreate-сar" component={CreateCar} />
          <Route path="/сreate-user" component={CreateUser} />
          <Route path="/display-car" component={DisplayCars} />
          <Route path="/display-user" component={DisplayUsers} />
          <Route path="/garage" component={Garage} />
        </Switch>
      </div>
    </>
  );
}

export default App;
