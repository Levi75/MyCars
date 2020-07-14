import React from "react";
import Styles from "./CreateCar.module.scss";
import BootstrapForm from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Form, Field } from "react-final-form";
import axios from "axios";

export default function CreateCar() {
  // const [name, setName] = React.useState("");
  // const [price, setprice] = React.useState("");
  const [users, setUsers] = React.useState();
  console.log(users);

  const createCars = async (value) => {
    try {
      await axios.post("http://localhost:5000/cars", value);
    } catch (e) {
      console.log(e);
    }
  };

  const getUsers = async () => {
    try {
      const Users = await axios.get("http://localhost:5000/all-users");
      console.log(Users);

      setUsers(Users.data);
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    getUsers();
  }, []);

  const onSubmit = async (value) => {
    createCars(value);
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
                <BootstrapForm.Label>price $</BootstrapForm.Label>
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
