import React from "react";
import Styles from "./CreateCar.module.scss";
import BootstrapForm from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Form, Field } from "react-final-form";

export default function CreateCar() {
  const onSubmit = async (value) => {
    console.log(value);
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

              <BootstrapForm.Group controlId="price">
                <BootstrapForm.Label>Price $</BootstrapForm.Label>
                <Field name="price">
                  {({ input }) => (
                    <BootstrapForm.Control
                      name="price"
                      type="number"
                      placeholder="price"
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
