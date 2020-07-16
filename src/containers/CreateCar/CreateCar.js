import React from "react";
import Styles from "./CreateCar.module.scss";
import { Form, Field } from "react-final-form";
import axios from "axios";
import { MDBInput, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";
import Spinner from "../../helper/HelperSpinner/HelperSpinner";

export default function CreateCar() {
  const [isLoading, setIsLoading] = React.useState(false);

  const years = [
    "1980",
    "1981",
    "1982",
    "1983",
    "1984",
    "1985",
    "1986",
    "1987",
    "1988",
    "1989",
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
  ];
  const createCars = async (value) => {
    try {
      await axios.post("http://localhost:5000/cars/add", value);
    } catch (e) {
      return console.log(e);
    }
  };

  const onSubmit = async (value) => {
    setIsLoading(true);
    await createCars(value);
    setIsLoading(false);
  };

  if (isLoading === true) {
    return <Spinner />;
  }

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
                          type="number"
                          onChange={(date) => {
                            input.onChange(date);
                          }}
                        />
                      )}
                    </Field>
                    <Field name="year">
                      {({ input }) => (
                        <select
                          className="browser-default custom-select"
                          validate
                          error="wrong"
                          success="right"
                          group
                          name="year"
                          type="text"
                          onChange={(date) => {
                            input.onChange(date);
                          }}
                        >
                          <option value={""}>Год выпуска</option>
                          {years.map((year) => {
                            return (
                              <option value={`${year}-01-01`}>{year}</option>
                            );
                          })}
                        </select>
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
                        <select
                          className="browser-default custom-select"
                          validate
                          error="wrong"
                          success="right"
                          group
                          name="boxType"
                          type="text"
                          onChange={(date) => {
                            input.onChange(date);
                          }}
                        >
                          <option value={""}>Тип коробки передач</option>
                          <option value={"Manual transmission"}>
                            Механическая коробка
                          </option>
                          <option value={"Automatic transmission"}>
                            Автоматическая коробка
                          </option>
                          <option value={"Robotic gearbox"}>
                            Роботизированная коробк
                          </option>
                          <option value={"Variable transmission"}>
                            Вариативная коробка
                          </option>
                        </select>
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
                          type="number"
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
