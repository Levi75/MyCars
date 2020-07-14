import React from "react";
import Styles from "./CreateUser.module.scss";
import BootstrapForm from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Form, Field } from "react-final-form";
import axios from "axios";

export default function CreateUser() {
  const postUser = async (value) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/add-user",
        value
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmit = async (value) => {
    postUser(value);
  };
  return (
    <div className={Styles.User}>
      <div className={Styles.User_container}>
        Создание пользователей
        <Form
          onSubmit={onSubmit}
          initialValues={{}}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <BootstrapForm.Group controlId="formBasicEmail">
                <BootstrapForm.Label>Email </BootstrapForm.Label>
                <Field name="email">
                  {({ input }) => (
                    <BootstrapForm.Control
                      name="email"
                      type="email"
                      placeholder="Enter email"
                      onChange={(date) => {
                        input.onChange(date);
                      }}
                    />
                  )}
                </Field>
              </BootstrapForm.Group>
              <BootstrapForm.Group controlId="formBasicPassword">
                <BootstrapForm.Label>Name</BootstrapForm.Label>
                <Field name="name">
                  {({ input }) => (
                    <BootstrapForm.Control
                      name="name"
                      type="text"
                      placeholder="Name"
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
