import React from "react";
import Styles from "./CarInGarage.module.scss";
import axios from "axios";

export default function CarInGarage({ car }) {
  const deleteCar = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/garage/${id}`);
      console.log("success delete");
    } catch (e) {
      console.log(e);
    }
    window.location.reload();
  };

  return (
    <div className={Styles.CarInGarage}>
      <div className={Styles.CarInGarage_container}>
        <span> name: {car.name}</span>
        <span> price: {car.price}</span>
      </div>
      <button onClick={() => deleteCar(car.cars_id)}> delete</button>
    </div>
  );
}
