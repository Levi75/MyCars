import React from "react";
import Styles from "./CreateCar.module.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function CreateCar() {
  return (
    <div className={Styles.Car}>
      <div className={Styles.Car_container}>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Car name</Form.Label>
            <Form.Control type="text" placeholder="Enter car name" />
          </Form.Group>

          <Form.Group controlId="year">
            <Form.Label>Year of car manufacture</Form.Label>
            <Form.Control type="date" placeholder="Year of car manufacture" />
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Price $</Form.Label>
            <Form.Control type="number" placeholder="Price" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Registration car
          </Button>
        </Form>
      </div>
    </div>
  );
}
