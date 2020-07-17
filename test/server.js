const mocha = require("mocha"); // require mocha
const chai = require("chai"); // require chai
const axios = require("axios");

const expect = chai.expect;

describe("Test Server", () => {
  // it("checking get cars ", () => {
  //   const getCars = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5000/cars");
  //       return response.data;
  //     } catch (e) {
  //       return e;
  //     }
  //   };

  //   getCars().then((local) => {
  //     expect(local).to.eql([]);
  //   });
  // });

  it("checking create Cars ", () => {
    const body = {
      name: "fff",
      price: 12,
      year: "2020-03-03",
      brand: "gggg",
      model: "ttttt",
      boxType: "mec",
      engineCapacity: "1.6",
      img: "htpp/mers",
    };
    const createCars = async () => {
      try {
        const responce = await axios.post(
          "http://localhost:5000/cars/add",
          body
        );

        return responce.data;
      } catch (e) {
        return console.log(e);
      }
    };

    createCars().then((local) => {
      console.log("local---------", local);
      expect(local).to.include({
        price: 12,
        year: "2020-03-03",
        brand: "gggg",
        model: "ttttt",
        boxType: "mec",
        engineCapacity: "1.6",
        img: "htpp/mers",
      });
    });
  });
});
