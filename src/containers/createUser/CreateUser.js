import React from "react";
import Styles from "./CreateUser.module.scss";
import BootstrapForm from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Form, Field } from "react-final-form";
import axios from "axios";
import { MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";

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
      <Form
        onSubmit={onSubmit}
        initialValues={{}}
        render={({ handleSubmit }) => (
          <form className={Styles.FormUser} onSubmit={handleSubmit}>
            <MDBCol md="6">
              <MDBCard>
                <MDBCardBody>
                  <p className="h4 text-center py-4">Sign up</p>
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
                          placeholder="Enter email"
                          onChange={(date) => {
                            input.onChange(date);
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
                          placeholder="Name"
                          onChange={(date) => {
                            input.onChange(date);
                          }}
                        />
                      )}
                    </Field>
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="cyan" type="submit">
                      Register
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </form>
        )}
      />
    </div>
  );
}
