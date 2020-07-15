import React from "react";
import Styles from "./CreateCar.module.scss";
import BootstrapForm from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Form, Field } from "react-final-form";
import axios from "axios";
import { MDBInput, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";

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

  const getUsers = React.useCallback(async () => {
    try {
      const Users = await axios.get("http://localhost:5000/all-users");
      console.log(Users);

      setUsers(Users.data);
    } catch (e) {
      console.log(e);
    }
  }, []);
  React.useEffect(() => {
    getUsers();
  }, [getUsers]);

  const onSubmit = async (value) => {
    createCars(value);
  };
  return (
    <div className={Styles.Car}>
      <Form
        onSubmit={onSubmit}
        initialValues={{}}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={Styles.Form}>
            <div className={Styles.Form__Create_User}>
              <MDBCard>
                <MDBCardBody>
                  <p className="h4 text-center py-4">Создание машины</p>
                  <div className="grey-text">
                    <Field name="name">
                      {({ input }) => (
                        <MDBInput
                          label="Имя"
                          icon="user"
                          validate
                          error="wrong"
                          success="right"
                          group
                          name="name"
                          type="text"
                          onChange={(date) => {
                            input.onChange(date);
                          }}
                        />
                      )}
                    </Field>
                    <Field name="price">
                      {({ input }) => (
                        <MDBInput
                          label="Цена"
                          icon="dollar-sign"
                          validate
                          error="wrong"
                          success="right"
                          group
                          name="price"
                          type="text"
                          onChange={(date) => {
                            input.onChange(date);
                          }}
                        />
                      )}
                    </Field>
                    <Field name="year">
                      {({ input }) => (
                        <MDBInput
                          label="Дата"
                          icon="calendar-alt"
                          validate
                          error="wrong"
                          success="right"
                          group
                          name="year"
                          type="text"
                          onChange={(date) => {
                            input.onChange(date);
                          }}
                        />
                      )}
                    </Field>
                    <Field name="brand">
                      {({ input }) => (
                        <MDBInput
                          label="Марка"
                          icon="bimobject"
                          validate
                          error="wrong"
                          success="right"
                          group
                          name="brand"
                          type="text"
                          onChange={(date) => {
                            input.onChange(date);
                          }}
                        />
                      )}
                    </Field>
                    <Field name="model">
                      {({ input }) => (
                        <MDBInput
                          label="Модель"
                          icon="car"
                          validate
                          error="wrong"
                          success="right"
                          group
                          name="model"
                          type="text"
                          placeholder="Имя"
                          onChange={(date) => {
                            input.onChange(date);
                          }}
                        />
                      )}
                    </Field>
                    <Field name="boxType">
                      {({ input }) => (
                        <MDBInput
                          label="Тип коробки"
                          icon="map-pin"
                          validate
                          error="wrong"
                          success="right"
                          group
                          name="boxType"
                          type="text"
                          placeholder="Имя"
                          onChange={(date) => {
                            input.onChange(date);
                          }}
                        />
                      )}
                    </Field>
                    <Field name="engineCapacity">
                      {({ input }) => (
                        <MDBInput
                          label="Мощность двигателя"
                          icon="chart-line"
                          validate
                          error="wrong"
                          success="right"
                          group
                          name="engineCapacity"
                          type="text"
                          placeholder="Имя"
                          onChange={(date) => {
                            input.onChange(date);
                          }}
                        />
                      )}
                    </Field>
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="blue darken-3" type="submit">
                      Добавить машину
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
