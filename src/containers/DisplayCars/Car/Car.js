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

export default function Car({ car, getCars }) {
  const [showUpdate, setShowUpdate] = React.useState(false);

  let year = car.year && car.year.split("-")[0];

  const id = car.cars_id;

  const deleteCar = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cars/delete/${id}`);
      return getCars();
    } catch (e) {
      return console.log(e);
    }
  };

  const updateCar = async (value) => {
    console.log(value, id);

    try {
      await axios.put(`http://localhost:5000/cars/update/${id}`, value);
      return getCars();
    } catch (e) {
      return console.log(e);
    }
  };

  const onSubmit = async (value) => {
    console.log(value);

    updateCar(value);
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
