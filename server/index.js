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
    const { description } = req.body;

    const newCar = await pool.query(
      "INSERT INTO cars (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newCar.rows[0]);
  } catch (err) {
    console.error(err.massage);
  }
});

//get all cars

app.get("/cars", async (req, res) => {
  try {
    console.log(pool);
    const allCars = await pool.query("SELECT * FROM cars");
    res.json(allCars.rows);
  } catch (err) {
    console.error(err.massage);
  }
});

//get a car
app.get("/cars/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const car = await pool.query("SELECT * FROM cars WHERE cars_id=$1", [id]);
    res.json(car.rows[0]);
  } catch (err) {
    console.error(err.massage);
  }
});

//update a car
app.put("/cars/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateCar = await pool.query(
      "UPDATE cars SET description = $1 WHERE cars_id=$2",
      [description, id]
    );
    res.json("Car was Updated");
  } catch (err) {
    console.error(err.massage);
  }
});

//delete a car
app.delete("/cars/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updateCar = await pool.query("DELETE FROM cars WHERE cars_id=$1", [
      id,
    ]);
    res.json("Car was deleted!");
  } catch (err) {
    console.error(err.massage);
  }
});

app.listen(5000, () => {
  console.log("servre has started on port 5000");
});
