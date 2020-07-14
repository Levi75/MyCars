import React from "react";
import Styles from "./DisplayCars.module.scss";
import Car from "./car/Car";
import axios from "axios";

export default function DisplayCars() {
  const [cars, setCars] = React.useState([]);
  const [users, setUsers] = React.useState([]);

  const getCars = React.useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:5000/cars");
      setCars(response.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getUsers = React.useCallback(async () => {
    try {
      const Users = await axios.get("http://localhost:5000/all-users");
      setUsers(Users.data);
    } catch (e) {
      console.log(e);
    }
  }, []);
  
  React.useEffect(() => {
    getCars();
    getUsers();
  }, [getCars, getUsers]);

  return (
    <div className={Styles.DisplayCars}>
      <h1> display cars</h1>
      {cars.map((car, index) => {
        return <Car car={car} getCars={getCars} users={users} key={index} />;
      })}
    </div>
  );
}
