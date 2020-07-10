import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import CreateCar from "./containers/createCar/CreateCar";
import CreateUser from "./containers/createUser/CreateUser";

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
      </div>
      <div>
        <Switch>
          <Route path="/сreate-сar" component={CreateCar} />
          <Route path="/сreate-user" component={CreateUser} />
        </Switch>
      </div>
    </>
  );
}

export default App;
