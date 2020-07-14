import React from "react";
import Styles from "./Garage.module.scss";
import CarInGarage from "./CarInGarage/CarInGarage";
import OwnerlessCars from "./OwnerlessCars/OwnerlessCars";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

export default function Garage() {
  const [garage, setGarage] = React.useState({});
  const [cars, setCars] = React.useState([]);
  const [user, setUser] = React.useState({});
  const [ownerlessCars, setOwnerlessCars] = React.useState([]);

  const userId = useParams().id;

  const getGarage = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/garage/${userId}`
      );

      setGarage(response.data);
      setCars(response.data.cars);
      setUser(response.data.user);
      return;
    } catch (e) {
      return console.log(e);
    }
  };
  const getCars = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/garage-cars`);
      setOwnerlessCars(response.data);

      return;
    } catch (e) {
      return console.log(e);
    }
  };

  React.useEffect(() => {
    getGarage();
  }, [userId]);

  return (
    <div className={Styles.Garage}>
      <h1> Garage</h1>
      <div>
        <div className={Styles.infoUser}>
          <p> user email: {user.email}</p>
          <p> user name: {user.name}</p>
          <button onClick={getCars}> Add car</button>
        </div>
        <div className={Styles.infoCars}>
          {cars !== []
            ? cars.map((car, index) => {
                return <CarInGarage car={car} key={index} />;
              })
            : null}
        </div>
      </div>
      <div>
        {ownerlessCars !== []
          ? ownerlessCars.map((car, index) => {
              return <OwnerlessCars car={car} key={index} />;
            })
          : null}
      </div>
    </div>
  );
}
