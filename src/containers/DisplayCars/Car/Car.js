import React from "react";
import Styles from "./Car.module.scss";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";
import { Link } from "react-router-dom";

export default function Car({ car, getCars, setCars }) {
  const [showUpdate, setShowUpdate] = React.useState(false);
  console.log(car);

  let year = car.year && car.year.split("-")[0];

  const id = car.cars_id;

  const deleteCar = async (id) => {
    setCars(true);
    try {
      await axios.delete(`http://localhost:5000/cars/delete/${id}`);
      getCars();
      return;
    } catch (e) {
      setCars(false);
      return console.log(e);
    }
  };

  const updateCar = async (value) => {
    console.log(value, id);
    setCars(true);
    try {
      await axios.put(`http://localhost:5000/cars/update/${id}`, value);
      getCars();
      return;
    } catch (e) {
      setCars(false);
      return console.log(e);
    }
  };

  const onSubmit = async (value) => {
    setCars(true);
    await updateCar(value);
    setCars(false);
  };

  return (
    <div>
      <MDBRow className={Styles.container}>
        <MDBCol md="12" className="p-3">
          <MDBCard className={Styles.card}>
            <img
              width={500}
              top
              // src={car.img}
              src="https://img.drive.ru/i/0/5e4ffa3dec05c4f149000015.jpg"
              overlay="white-slight"
              hover
              waves
              alt={`${car.brand} ${car.model}`}
            />
            <MDBCardBody className="elegant-color white-text rounded-bottom">
              <MDBCardTitle>
                {car.brand} {car.model}
              </MDBCardTitle>
              <hr className="hr-light" />
              <MDBCardText className="white-text">
                {car.name && (
                  <p>
                    Имя: <b>{car.name}</b>
                  </p>
                )}
                {car.price && (
                  <p>
                    Цена: <b>{car.price}</b>
                  </p>
                )}
                {year && (
                  <p>
                    Год выпуска: <b>{year}</b>
                  </p>
                )}
                {car.brand && (
                  <p>
                    Марка: <b>{car.brand}</b>
                  </p>
                )}
                {car.model && (
                  <p>
                    Модель: <b>{car.model}</b>
                  </p>
                )}
                {car.boxtype && (
                  <p>
                    Тип коробки передач: <b>{car.boxtype}</b>
                  </p>
                )}
                {car.enginecapacity && (
                  <p>
                    Мощность двигателя: <b>{car.enginecapacity}</b>
                  </p>
                )}
              </MDBCardText>
              <Link
                to={`/car-update/${car.id}`}
                className="black-text d-flex justify-content-end"
              >
                <h5 className="white-text">
                  Read more
                  <MDBIcon icon="angle-double-right" className="ml-2" />
                </h5>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
  // (
  //   <div className={Styles.Car}>
  //     <div>
  //       <span> name: {car.name}</span>
  //       <span> price: {car.price}</span>
  //     </div>
  //     <button onClick={() => deleteCar(car.cars_id)}> delete</button>
  //     <button onClick={() => setShowUpdate(!showUpdate)}> update</button>
  //   </div>
  // );
}
