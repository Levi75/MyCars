import React from "react";
import Styles from "./CreateCar.module.scss";
import BootstrapForm from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Form, Field } from "react-final-form";
import axios from "axios";

export default function CreateCar() {
  // const [name, setName] = React.useState("");
  // const [prise, setprise] = React.useState("");

  const createCars = async (name, prise) => {
    try {
      const response = await axios.post("http://localhost:5000/cars", {
        name,
        prise,
      });

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmit = async (value) => {
    const { name, prise } = value;

    createCars(name, prise);
  };
  return (
    <div className={Styles.Car}>
      <div className={Styles.Car_container}>
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
      </div>
    </div>
  );
}
