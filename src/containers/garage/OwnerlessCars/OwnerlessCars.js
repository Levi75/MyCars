import React from "react";
import Styles from "./OwnerlessCars.module.scss";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

export default function OwnerlessCars({ car }) {
  const userId = useParams().id;

  const addCar = async (carId) => {
    try {
      await axios.put(`http://localhost:5000/garage/${userId}`, {
        carId,
      });
    } catch (e) {
      console.log(e);
    }
    window.location.reload();
  };

  return (
    <div className={Styles.CarInGarage}>
      <div>
        <span> name: {car.name}</span>
        <span> price: {car.price}</span>
      </div>
      <button onClick={() => addCar(car.cars_id)}> add car</button>
    </div>
  );
}
