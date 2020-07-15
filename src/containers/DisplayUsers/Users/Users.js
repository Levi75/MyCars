import React from "react";
import Styles from "./Users.module.scss";
import axios from "axios";
import BootstrapForm from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Form, Field } from "react-final-form";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBInput,
  MDBCol,
  MDBIcon,
} from "mdbreact";

export default function Users({ user, getUsers }) {
  const [showUpdate, setShowUpdate] = React.useState(false);

  const deleteCar = async (id) => {
    console.log(id);

    try {
      await axios.delete(`http://localhost:5000/users/delete/${id}`);
      getUsers();
    } catch (e) {
      console.log(e);
    }
  };

  const updateCar = async (value) => {
    const { name } = value;
    try {
      await axios.put(`http://localhost:5000/users/update/${user.id}`, {
        name: name,
      });
      getUsers();
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmit = async (value) => {
    setShowUpdate(!showUpdate);
    await updateCar(value);
  };

  return (
    <MDBCol className="p-3 col-md-12 ">
      <MDBCard className="col-md-4 rounded mx-auto d-block">
        <MDBCardBody>
          <MDBCardTitle>Email: {user.email}</MDBCardTitle>
          {showUpdate ? (
            <Form
              onSubmit={onSubmit}
              initialValues={{}}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <Field name="name">
                    {({ input }) => (
                      <MDBInput
                        label="Имя"
                        name="name"
                        type="text"
                        valueDefault={user.name}
                        onChange={(date) => {
                          input.onChange(date);
                        }}
                      />
                    )}
                  </Field>
                  <MDBBtn color="light-blue" type="submit">
                    Сохранить изменения
                  </MDBBtn>
                </form>
              )}
            />
          ) : (
            <MDBCardTitle>Имя: {user.name}</MDBCardTitle>
          )}

          <hr />
          <MDBBtn color="red" onClick={() => deleteCar(user.id)}>
            Удалить
          </MDBBtn>
          <MDBBtn color="green" onClick={() => setShowUpdate(!showUpdate)}>
            Редактировать
          </MDBBtn>
          <Link
            to={`garage/${user.user_id}`}
            className="black-text d-flex justify-content-end"
          >
            <h5>
              В гараж
              <MDBIcon icon="angle-double-right" className="ml-2" />
            </h5>
          </Link>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

    /* {showUpdate && (
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
                      placeholder="Имя"
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
      )} */
  );
}
