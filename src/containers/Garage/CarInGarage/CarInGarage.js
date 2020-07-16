import React from "react";
import Styles from "./CarInGarage.module.scss";
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
  MDBBtn,
} from "mdbreact";

export default function CarInGarage({ car, userId, getGarage }) {
  let year = car.year && car.year.split("-")[0];

  const deleteCar = async (car_id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/users/${userId}/garage/delete`,
        { car_id: "12" }
      );
      getGarage();
      console.log(response);

      console.log("success delete");
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
              onClick={() => deleteCar(car.id)}
            >
              Delete car
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
