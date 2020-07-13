import React from "react";
import Styles from "./CreateUser.module.scss";
import BootstrapForm from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Form, Field } from "react-final-form";

export default function CreateUser() {
  const onSubmit = async (value) => {
    console.log(value);
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
                <BootstrapForm.Label>Email address</BootstrapForm.Label>
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
                <BootstrapForm.Text className="text-muted">
                  We'll never share your email with anyone else.
                </BootstrapForm.Text>
              </BootstrapForm.Group>
              <BootstrapForm.Group controlId="formBasicPassword">
                <BootstrapForm.Label>Password</BootstrapForm.Label>
                <Field name="password">
                  {({ input }) => (
                    <BootstrapForm.Control
                      name="password"
                      type="password"
                      placeholder="Password"
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
