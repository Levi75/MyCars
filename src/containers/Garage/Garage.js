import React from "react";
import Styles from "./Garage.module.scss";
import CarInGarage from "./CarInGarage/CarInGarage";
import OwnerlessCars from "./OwnerlessCars/OwnerlessCars";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Garage() {
  const [garage, setGarage] = React.useState([]);

  const [ownerlessCars, setOwnerlessCars] = React.useState([]);

  const userId = useParams().id;

  const getGarage = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/users/${userId}/garage`
      );

      setGarage(response.data.garage);

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
      <div className={Styles.Garage_container}>
        <div className={Styles.infoCars}>
          {garage.length !== 0
            ? garage.map((car, index) => {
                return <CarInGarage car={car} userId={userId} key={index} />;
              })
            : null}
        </div>
      </div>
      <div>
        {ownerlessCars.length !== 0
          ? ownerlessCars.map((car, index) => {
              return (
                <div>
                  <h2>Ownerless Cars</h2>
                  <OwnerlessCars car={car}  key={index} />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
