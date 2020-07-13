import React, { useReducer } from "react";
import Styles from "./CarInGarage.module.scss";
import axios from "axios";
import BootstrapForm from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Form, Field } from "react-final-form";

export default function CarInGarage({ car, user }) {
  const [showUpdate, setShowUpdate] = React.useState(false);

  const id = car.cars_id;

  const deleteCar = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cars/${id}`);
      console.log("success delete");
    } catch (e) {
      console.log(e);
    }
    window.location.reload();
  };

  const updateCar = async (value) => {
    const { name, price } = value;

    try {
      await axios.put(`http://localhost:5000/cars/${id}`, {
        name: name,
        price,
      });
      console.log("success update ");
    } catch (e) {
      console.log(e);
    }
    window.location.reload();
  };

  const onSubmit = async (value) => {
    updateCar(value);
  };

  return (
    <div className={Styles.CarInGarage}>
      <div>
        <span> user: {user.email}</span>
        <span> user: {user.name}</span>
        <br />
        <span> name: {car.name}</span>
        <span> price: {car.price}</span>
      </div>
      <button onClick={() => deleteCar(car.cars_id)}> delete</button>
      <button onClick={() => setShowUpdate(!showUpdate)}> update</button>

      {showUpdate ? (
        <Form
          onSubmit={onSubmit}
          initialValues={{}}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <BootstrapForm.Group controlId="name">
                <BootstrapForm.Label>Car name</BootstrapForm.Label>
                <Field name="name">
                  {({ input }) => (
                    <BootstrapForm.Control
                      name="name"
                      type="text"
                      placeholder={car.name}
                      onChange={(date) => {
                        input.onChange(date);
                      }}
                    />
                  )}
                </Field>
              </BootstrapForm.Group>

              <BootstrapForm.Group controlId="price">
                <BootstrapForm.Label>price $</BootstrapForm.Label>
                <Field name="price">
                  {({ input }) => (
                    <BootstrapForm.Control
                      name="price"
                      type="number"
                      placeholder={car.price}
                      onChange={(date) => {
                        input.onChange(date);
                      }}
                    />
                  )}
                </Field>
              </BootstrapForm.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </form>
          )}
        />
      ) : null}
    </div>
  );
}
