import React from "react";
import Styles from "./Garage.module.scss";
import CarInGarage from "./CarInGarage/CarInGarage";

import axios from "axios";

export default function Garage() {
  const [garage, setGarage] = React.useState([]);

  //   const getGarage = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5000/cars");
  //       setGarage(response.data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  //   React.useMemo(() => {
  //     getGarage();
  //   }, []);

  return (
    <div className={Styles.Garage}>
      <h1> Garage</h1>
      {garage.map((car, index) => {
        return <CarInGarage car={car} key={index} />;
      })}
    </div>
  );
}
