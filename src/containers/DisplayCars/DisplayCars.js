import React from "react";
import Styles from "./DisplayCars.module.scss";
import Car from "./Car/Car";
import axios from "axios";
import Spinner from "../../helper/HelperSpinner/HelperSpinner";

export default function DisplayCars() {
  const [cars, setCars] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const getCars = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/cars/list");
      setCars(response.data);
      setIsLoading(false);
      return;
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      return;
    }
  }, []);

  React.useEffect(() => {
    getCars();
  }, [getCars]);

  if (isLoading === true) {
    return <Spinner />;
  }

  return (
    <div className={Styles.DisplayCars}>
      <h1> display cars</h1>
      {cars.map((car, index) => {
        return (
          <Car car={car} getCars={getCars} key={index} setCars={setCars} />
        );
      })}
    </div>
  );
}
