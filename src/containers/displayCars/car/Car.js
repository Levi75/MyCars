import React from "react";
import Styles from "./Car.module.scss";
import axios from "axios";
import BootstrapForm from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Form, Field } from "react-final-form";

export default function Car({ car, users, getCars }) {
  const [showUpdate, setShowUpdate] = React.useState(false);

  const id = car.cars_id;

  const deleteCar = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cars/${id}`);
      return getCars();
    } catch (e) {
      return console.log(e);
    }
  };

  const updateCar = async (value) => {
    console.log(value, id);

    try {
      await axios.put(`http://localhost:5000/cars/${id}`, value);
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
    <div className={Styles.Car}>
      <div>
        <span> name: {car.name}</span>
        <span> price: {car.price}</span>
        {car.user_id && <span> user: {car.name}</span>}
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
                      placeholder="name"
                      defaultValue={car.name}
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
                      placeholder="price"
                      defaultValue={car.price}
                      onChange={(date) => {
                        input.onChange(date);
                      }}
                    />
                  )}
                </Field>
              </BootstrapForm.Group>
              {!car.user_id && (
                <BootstrapForm>
                  <BootstrapForm.Group controlId="exampleForm.SelectCustom">
                    <BootstrapForm.Label>Custom select</BootstrapForm.Label>
                    <Field name="user_id" component="select">
                      <option value={null}>{null}</option>
                      {users &&
                        users.map((user) => {
                          return (
                            <option value={user.user_id}>{user.name}</option>
                          );
                        })}
                    </Field>
                  </BootstrapForm.Group>
                </BootstrapForm>
              )}

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
