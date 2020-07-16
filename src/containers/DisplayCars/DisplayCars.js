import React from "react";
import Styles from "./DisplayCars.module.scss";
import Car from "./Car/Car";
import axios from "axios";
import Spinner from "../../helper/HelperSpinner/HelperSpinner";
import { isEqualityNull } from "../../helper/IsEqualityNull/IsEqualityNull";

export default function DisplayCars() {
  const [cars, setCars] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [search, setSearch] = React.useState("");

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

  const handleChange = (e) => {
    setSearch(e.target.value.trim());
  };

  const searchCar = React.useMemo(() => {
    if (search.length > 0) {
      return cars.filter((car, index) => {
        const filter = `${isEqualityNull(car.name)}${isEqualityNull(
          car.price
        )}${isEqualityNull(car.year)}${isEqualityNull(
          car.brand
        )}${isEqualityNull(car.model)}`;
        return filter.includes(search.toLowerCase());
      });
    }
    return cars;
  }, [cars, search]);

  React.useEffect(() => {
    getCars();
  }, [getCars]);

  if (isLoading === true) {
    return <Spinner />;
  }

  return (
    <div className={Styles.DisplayCars}>
      <h1 className="p-4"> Машины </h1>
      <div>
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={handleChange}
        />
      </div>
      {searchCar.map((car, index) => {
        return (
          <Car car={car} getCars={getCars} key={index} setCars={setCars} />
        );
      })}
    </div>
  );
}
