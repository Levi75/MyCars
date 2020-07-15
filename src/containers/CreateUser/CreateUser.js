import React from "react";
import Styles from "./CreateUser.module.scss";
import BootstrapForm from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Form, Field } from "react-final-form";
import axios from "axios";
import { MDBInput, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";

export default function CreateUser() {
  const postUser = async (value) => {
    console.log(value);
    try {
      const response = await axios.post(
        "http://localhost:5000/users/add",
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
      <Form
        onSubmit={onSubmit}
        initialValues={{}}
        render={({ handleSubmit }) => (
          <form className={Styles.Form} onSubmit={handleSubmit}>
            <div className={Styles.Form__Create_User}>
              <MDBCard>
                <MDBCardBody>
                  <p className="h4 text-center py-4">Создание пользователя</p>
                  <div className="grey-text">
                    <Field name="email">
                      {({ input }) => (
                        <MDBInput
                          label="Email"
                          icon="envelope"
                          group
                          validate
                          name="email"
                          type="email"
                          error="wrong"
                          success="right"
                          placeholder="Email"
                          onChange={(data) => {
                            input.onChange(data);
                          }}
                        />
                      )}
                    </Field>

                    <Field name="name">
                      {({ input }) => (
                        <MDBInput
                          label="Name"
                          icon="user"
                          validate
                          error="wrong"
                          success="right"
                          group
                          name="name"
                          type="text"
                          placeholder="Имя"
                          onChange={(data) => {
                            input.onChange(data);
                          }}
                        />
                      )}
                    </Field>
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="blue darken-3" type="submit">
                      Добавить пользователя
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </div>
          </form>
        )}
      />
    </div>
  );
}
