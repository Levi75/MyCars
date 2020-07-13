import React from "react";
import Styles from "./DisplayCars.module.scss";
import Car from "./car/Car";
import axios from "axios";

export default function DisplayCars() {
  const [cars, setCars] = React.useState([]);

  const getCars = async () => {
    try {
      const response = await axios.get("http://localhost:5000/cars");
      setCars(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  React.useMemo(() => {
    getCars();
  }, []);

  return (
    <div className={Styles.DisplayCars}>
      <h1> display cars</h1>
      {cars.map((car, index) => {
        return <Car car={car} key={index} />;
      })}
    </div>
  );
}
