const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");
//middleware

app.use(cors());
app.use(express.json());

//ROUTES//

//create a cars

app.post("/cars", async (req, res) => {
  try {
    const { name, prise } = req.body;
    console.log(name, prise);

    const newCar = await pool.query(
      "INSERT INTO carses(name,prise) VALUES($1,$2) RETURNING *;",
      [name, prise]
    );

    res.json(newCar.rows[0]);
  } catch (err) {
    console.error(err.massage);
  }
});

//get all cars

app.get("/cars", async (req, res) => {
  try {
    const allCars = await pool.query("SELECT * FROM carses");
    res.json(allCars.rows);
  } catch (err) {
    console.error(err.massage);
  }
});

//get a car
app.get("/cars/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const car = await pool.query("SELECT * FROM carses WHERE cars_id=$1", [id]);
    res.json(car.rows[0]);
  } catch (err) {
    console.error(err.massage);
  }
});

//update a car
app.put("/cars/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    await pool.query("UPDATE carses SET name = $1 WHERE cars_id=$2", [
      name,
      id,
    ]);
    res.json("Car was Updated");
  } catch (err) {
    console.error(err.massage);
  }
});

//delete a car
app.delete("/cars/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM carses WHERE cars_id=$1", [id]);
    res.json("Car was deleted!");
  } catch (err) {
    console.error(err.massage);
  }
});

app.listen(5000, () => {
  console.log("servre has started on port 5000");
});
