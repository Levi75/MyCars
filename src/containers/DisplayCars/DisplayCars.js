import React from "react";
import Styles from "./DisplayCars.module.scss";
import Car from "./Car/Car";
import axios from "axios";

export default function DisplayCars() {
  const [cars, setCars] = React.useState([]);

  const getCars = React.useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:5000/cars/list");
      setCars(response.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  React.useEffect(() => {
    getCars();
  }, [getCars]);

  return (
    <div className={Styles.DisplayCars}>
      <h1> display cars</h1>
      {cars.map((car, index) => {
        return <Car car={car} getCars={getCars} key={index} />;
      })}
    </div>
  );
}
