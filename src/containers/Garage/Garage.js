import React from "react";
import Styles from "./Garage.module.scss";
import CarInGarage from "./CarInGarage/CarInGarage";
import OwnerlessCars from "./OwnerlessCars/OwnerlessCars";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MDBBtn, MDBBtnGroup } from "mdbreact";
import { isEqualityNull } from "../../helper/IsEqualityNull/IsEqualityNull";

export default function Garage() {
  const [garage, setGarage] = React.useState([]);
  const [ownerlessCars, setOwnerlessCars] = React.useState([]);
  const [showContent, setShowContent] = React.useState(true);
  const [filterMyCar, setFilterMyCar] = React.useState([]);
  const [searchValyeMyCar, setSearchValyeMyCar] = React.useState("");
  const [
    searchValueOwnerLessCars,
    setSearchValueOwnerLessCars,
  ] = React.useState("");
  const [responseOwnerLessCars, setResponseOwnerLessCars] = React.useState("");


  // console.log(filterMyCar);

  const upadateData = ()=>{

  }

  const userId = useParams().id;

  const getGarage = React.useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/users/${userId}/garage`
      );
      setGarage(response.data.garage);
      return;
    } catch (e) {
      return console.log(e);
    }
  }, []);

  const getOwnerlessCars = React.useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/users/${userId}/garage/other`
      );
      // console.log(response.data.cars);
      setOwnerlessCars(response.data.cars);

      return;
    } catch (e) {
      return console.log(e);
    }
  }, []);

  const searchOwnerLessCars = React.useMemo(() => {
    if (searchValueOwnerLessCars.length > 0) {
      return ownerlessCars.filter((car, index) => {
        const myOwnerlessCars = `${isEqualityNull(car.name)}${isEqualityNull(
          car.price
        )}${isEqualityNull(car.year)}${isEqualityNull(
          car.brand
        )}${isEqualityNull(car.model)}`;
        return myOwnerlessCars.includes(searchValueOwnerLessCars.toLowerCase());
      });
    }
    return ownerlessCars;
  }, [searchValueOwnerLessCars, ownerlessCars]);

  const searchMyCar = React.useMemo(() => {
    if (searchValyeMyCar.length > 0) {
      return garage.filter((car, index) => {
        const myCarFilter = `${isEqualityNull(car.name)}${isEqualityNull(
          car.price
        )}${isEqualityNull(car.year)}${isEqualityNull(
          car.brand
        )}${isEqualityNull(car.model)}`;
        return myCarFilter.includes(searchValyeMyCar.toLowerCase());
      });
    }
    return garage;
  }, [searchValyeMyCar, garage]);

  const handleChangeMyCar = (e) => {
    setSearchValyeMyCar(e.target.value.trim());
  };

  const handleChangeOwnerLessCars = (e) => {
    setSearchValueOwnerLessCars(e.target.value.trim());
  };

  React.useEffect(() => {
    getGarage();
    getOwnerlessCars();
  }, [userId, getOwnerlessCars, getGarage]);

  return (
    <div className={Styles.Garage}>
      <MDBBtnGroup>
        <MDBBtn
          color="info"
          active={showContent === true && true}
          onClick={() => setShowContent(true)}
        >
          Мои машины
        </MDBBtn>
        <MDBBtn
          color="info"
          active={showContent === false && true}
          onClick={() => setShowContent(false)}
        >
          Добавить машины
        </MDBBtn>
      </MDBBtnGroup>

      {showContent ? ( // className={Styles.infoCars}
        <div className="col-4 offset-4">
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={handleChangeMyCar}
          />
          {searchMyCar.length !== 0 &&
            searchMyCar.map((car, index) => {
              return (
                <CarInGarage
                  car={car}
                  userId={userId}
                  key={index}
                  getGarage={getGarage}
                />
              );
            })}
        </div>
      ) : (
        <div className="col-4 offset-4">
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={handleChangeOwnerLessCars}
          />
          {searchOwnerLessCars.length !== 0 &&
            searchOwnerLessCars.map((car, index) => {
              return (
                <div>
                  <OwnerlessCars
                    car={car}
                    key={index}
                    getOwnerlessCars={getOwnerlessCars}
                  />
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
