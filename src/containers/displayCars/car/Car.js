import React from "react";
import Styles from "./Car.module.scss";

export default function Car({ car }) {
  console.log(car);
  return (

    <div className={Styles.Car}>
      <span> name: {car.name}</span>
      <span> price: {car.price}</span>
      <span> year: {car.year}</span>
    </div>
  );
}
