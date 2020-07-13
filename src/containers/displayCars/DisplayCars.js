import React from "react";
import Styles from "./DisplayCars.module.scss";
import Car from "./car/Car";

export default function DisplayCars() {
  const cars = [
    {
      name: "Ford mustang",
      year: 2014,
      price: 28571,
    },
    {
      name: "Chevrolet Camaro",
      year: 2013,
      price: 30000,
    },
    {
      name: "Toyota Camry",
      year: 2010,
      price: 15000,
    },
  ];
  return (
    <div className={Styles.DisplayCars}>
      <h1> display cars</h1>
      {cars.map((car) => {
        return <Car car={car} />;
      })}
    </div>
  );
}
