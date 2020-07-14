import React from "react";
import Styles from "./Garage.module.scss";
import CarInGarage from "./CarInGarage/CarInGarage";

import axios from "axios";

export default function Garage() {
  const [garage, setGarage] = React.useState({});
  const [cars, setCars] = React.useState([]);
  const [user, setUser] = React.useState({});
  const [userId, setUserId] = React.useState(1);
  console.log(garage);

  const getGarage = async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/garage/${userId}`
      );
      setGarage(response.data);
      setCars(response.data.cars);
      setUser(response.data.user);
    } catch (e) {
      console.log(e);
    }
  };

  React.useMemo(() => {
    getGarage(userId);
  }, [userId]);

  return (
    <div className={Styles.Garage}>
      <h1> Garage</h1>
      <div className={Styles.infoUser}>
        <span> user email: {user.email}</span>
        <span> user name: {user.name}</span>
      </div>
      <div className={Styles.infoCars}>
        {cars !== []
          ? cars.map((car, index) => {
              return <CarInGarage car={car} key={index} />;
            })
          : null}
      </div>
    </div>
  );
}
