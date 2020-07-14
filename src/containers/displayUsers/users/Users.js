import React from "react";
import Styles from "./Users.module.scss";
import axios from "axios";
import BootstrapForm from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Form, Field } from "react-final-form";

export default function Users({ user, getUsers }) {
  const [showUpdate, setShowUpdate] = React.useState(false);
  console.log(user);

  const id = user.user_id;

  const deleteCar = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/delete-user/${id}`);
      getUsers();
    } catch (e) {
      console.log(e);
    }
  };

  const updateCar = async (value) => {
    const { name } = value;
    try {
      await axios.put(`http://localhost:5000/change-user/${id}`, {
        name: name,
      });
      getUsers();
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmit = async (value) => {
    updateCar(value);
  };

  return (
    <div className={Styles.User}>
      <div>
        <span> name: {user.name}</span>
        <span> email: {user.email}</span>
      </div>
      <button onClick={() => deleteCar(id)}> delete</button>
      <button onClick={() => setShowUpdate(!showUpdate)}> update</button>

      {showUpdate && (
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
      )}
    </div>
  );
}
