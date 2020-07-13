import React from "react";
import Styles from "./Car.module.scss";
import axios from "axios";
import BootstrapForm from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Form, Field } from "react-final-form";

export default function Car({ car }) {
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
    const { name, prise } = value;

    try {
      await axios.put(`http://localhost:5000/cars/${id}`, {
        name: name,
        prise,
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
    <div className={Styles.Car}>
      <div>
        <span> name: {car.name}</span>
        <span> prise: {car.prise}</span>
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
                      placeholder="Enter car name"
                      onChange={(date) => {
                        input.onChange(date);
                      }}
                      value={car.name}
                    />
                  )}
                </Field>
              </BootstrapForm.Group>

              <BootstrapForm.Group controlId="prise">
                <BootstrapForm.Label>prise $</BootstrapForm.Label>
                <Field name="prise">
                  {({ input }) => (
                    <BootstrapForm.Control
                      name="prise"
                      type="number"
                      placeholder="prise"
                      onChange={(date) => {
                        input.onChange(date);
                      }}
                      value={car.prise}
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
