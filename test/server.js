// const mocha = require("mocha"); // require mocha
const chai = require("chai"); // require chai
const axios = require("axios");

const expect = chai.expect;

describe("Test Server", () => {
  it("checking get cars ", () => {
    const getCars = async () => {
      try {
        const response = await axios.get("http://localhost:5000/cars");
        return response.data;
      } catch (e) {
        return e;
      }
    };

    getCars().then((local) => {
      expect(local).to.eql([
        {
          cars_id: 6,
          name: "Mazda",
          price: "11111",
          user_id: 2,
        },
        {
          cars_id: 5,
          name: "Category 4",
          price: "3252",
          user_id: 1,
        },
        {
          cars_id: 7,
          name: "mitsubisi",
          price: "33333",
          user_id: 1,
        },
        {
          cars_id: 3,
          name: "Ford mustang",
          price: "12341234",
          user_id: null,
        },
        {
          cars_id: 4,
          name: "Category 1",
          price: "325",
          user_id: 2,
        },
      ]);
    });
  });

  it("checking get car ", () => {
    const getCar = async () => {
      try {
        const response = await axios.get("http://localhost:5000/cars/4");
        return response.data;
      } catch (e) {
        return e;
      }
    };

    getCar().then((local) => {
      expect(local).to.eql({
        cars_id: 4,
        name: "Category 1",
        price: "325",
        user_id: 2,
      });
    });
  });
});
