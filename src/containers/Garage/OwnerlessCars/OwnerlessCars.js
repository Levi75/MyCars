import React from "react";
import Styles from "./OwnerlessCars.module.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
} from "mdbreact";

export default function OwnerlessCars({ car, getOwnerlessCars }) {
  const userId = useParams().id;
  let year = car.year && car.year.split("-")[0];

  const addCar = async (carId) => {
    try {
      await axios.put(`http://localhost:5000/garage/${userId}`, {
        carId,
      });
      getOwnerlessCars();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <MDBRow className={Styles.container}>
      <MDBCol md="13" className="p-3">
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
            <MDBBtn
              color="btn btn-light darken-3 rounded float-right"
              onClick={() => addCar(car.cars_id)}
            >
              Add car
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
