// import React from "react";
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";
// import CarInGarage from "../src/containers/garage/CarInGarage/CarInGarage";

// let container = null;
// beforeEach(() => {
//   // подготавливаем DOM-элемент, куда будем рендерить
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // подчищаем после завершения
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// it("renders with or without a name", () => {
//   let cart = {
//     name: "Ford",
//     price: 10,
//   };

//   act(() => {
//     render(<CarInGarage car={cart} />, container);
//   });
//   expect(container.textContent).toBe("name: Ford");
// });
