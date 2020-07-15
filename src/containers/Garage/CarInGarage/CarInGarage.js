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

export default function CarInGarage({ car, userId }) {
  let year = car.year && car.year.split("-")[0];

  const deleteCar = async () => {
    console.log("car", car.id, "user", userId);
    const val = {
      car_id: 1,
    };
    console.log(val);
    try {
      await axios.delete(
        `http://localhost:5000/users/${userId}/garage/delete`,
        val
      );

      console.log("success delete");
    } catch (e) {
      console.log(e);
    }
    // window.location.reload();
  };

  return (
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
              Name: <b>{car.name}</b>
              <br />
              Price: <b>{car.price}</b>
              <br />
              Year of car manufacture: <b>{year}</b>
              <br />
              boxtype: <b>{car.boxtype}</b>
              <br />
              enginecapacity: <b>{car.enginecapacity}</b>
            </MDBCardText>
            <MDBBtn
              color="btn btn-light darken-3 rounded float-right"
              onClick={deleteCar}
            >
              Delete car
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
