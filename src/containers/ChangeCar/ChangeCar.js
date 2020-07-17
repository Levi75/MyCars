import React from "react";
import Styles from "./ChangeCar.module.scss";
import axios from "axios";
import { Form, Field } from "react-final-form";
import { MDBCard, MDBCardBody, MDBInput, MDBBtn } from "mdbreact";
import { useParams } from "react-router-dom";
import Spinner from "../../helper/HelperSpinner/HelperSpinner";

export default function ChangeCar() {
  const [car, setCar] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const idCar = useParams().id;
  let year;

  if (car.year) {
    year = car.year.split("-")[0];
  } else {
    year = "Год выпуска";
  }
  let boxTypeRus;

  switch (car.boxtype) {
    case "Manual transmission":
      boxTypeRus = "Механическая коробка";
      break;
    case "Automatic transmission":
      boxTypeRus = "Автоматическая коробка";
      break;
    case "Robotic gearbox":
      boxTypeRus = "Роботизированная коробк";
      break;
    case "Variable transmission":
      boxTypeRus = "МВариативная коробка";
      break;
  }
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

  const getCar = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/cars/${idCar}`);
      setCar(response.data);
      setIsLoading(false);
      return;
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      return;
    }
  }, []);

  const changeCar = async (value) => {
    console.log(value);
    setIsLoading(true);
    try {
      await axios.put(`http://localhost:5000/cars/update/${idCar}`, value);
      await getCar();
      setIsLoading(false);
      return;
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      return;
    }
  };

  React.useEffect(() => {
    getCar();
  }, [getCar]);

  const onSubmit = async (value) => {
    await changeCar(value);
  };

  if (isLoading === true) {
    return <Spinner />;
  }
  return (
    <div className={Styles.ChangeCar}>
      <div className="col-4 offset-4 p-3">
        <Form
          onSubmit={onSubmit}
          initialValues={{}}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className={Styles.Form}>
              <div className={Styles.Form__Create_User}>
                <MDBCard>
                  <MDBCardBody>
                    <p className="h4 text-center py-4">Редактирование машины</p>
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
                            valueDefault={car.name}
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
                            valueDefault={car.price}
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
                            <option>{year}</option>
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
                            valueDefault={car.brand}
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
                            valueDefault={car.model}
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
                            <option value={car.boxtype}>{boxTypeRus}</option>
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
                      <Field name="enginecapacity">
                        {({ input }) => (
                          <MDBInput
                            label="Мощность двигателя"
                            icon="chart-line"
                            validate
                            error="wrong"
                            success="right"
                            group
                            name="enginecapacity"
                            type="number"
                            placeholder="Имя"
                            valueDefault={car.enginecapacity}
                            onChange={(date) => {
                              input.onChange(date);
                            }}
                          />
                        )}
                      </Field>
                    </div>
                    <div className="text-center py-4 mt-3">
                      <MDBBtn color="blue darken-3" type="submit">
                        Редактировать
                      </MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
}
