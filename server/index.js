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
    const { name, price, user_id } = req.body;

    const newCar = await pool.query(
      "INSERT INTO cars(name,price,user_id) VALUES($1,$2,$3) RETURNING *;",
      [name, price, user_id]
    );

    res.json(newCar.rows[0]);
  } catch (err) {
    console.error(err.massage);
  }
});

//get all cars

app.get("/cars", async (req, res) => {
  try {
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
    const { name, price } = req.body;

    const strName = name ? `name = '${name}'` : "";
    const strprice = price ? `price = '${price}'` : "";
    const body =
      name && price ? `${strName}, ${strprice}` : `${strName} ${strprice}`;
    console.log(body);

    await pool.query(`UPDATE cars SET ${body} WHERE cars_id=${id}`);
    res.json("Car was Updated");
  } catch (err) {
    console.error(err.massage);
  }
});

//delete a car
app.delete("/cars/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM cars WHERE cars_id=$1", [id]);
    res.json("Car was deleted!");
  } catch (err) {
    console.error(err.massage);
  }
});

// user routes //

app.post("/add-user", async (req, res) => {
  try {
    const { name, email } = req.body;
    const checkEmail = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    if (checkEmail.rows[0]) {
      res.json("Такой эмаил уже существует");
    }
    const CreateUser = await pool.query(
      "INSERT INTO users(name,email) VALUES($1,$2) RETURNING *",
      [name, email]
    );
    res.json(CreateUser.rows[0]);
  } catch (e) {
    console.error(e.massage);
  }
});

app.get("/all-users", async (req, res) => {
  try {
    const allPerntodo = await pool.query("SELECT * FROM users");
    res.json(allPerntodo.rows);
  } catch (e) {
    console.error(e.massage);
  }
});

app.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [
      id,
    ]);
    res.json(user.rows[0]);
  } catch (e) {
    console.error(e.massage);
  }
});

app.put("/change-user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const { body } = req;
    console.log(body);

    Object.entries(body).map(async (params) => {
      console.log(params);

      if (params[1] === undefined || params[1] === null) {
        return;
      }
      return await pool.query(
        `UPDATE users SET ${params[0]} = $1 WHERE user_id = $2`,
        [params[1], id]
      );
    });

    res.json("success");
  } catch (e) {
    console.error(e.massage);
  }
});

app.delete("/delete-user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await pool.query(
      "DELETE FROM users WHERE user_id = $1",
      [id]
    );
    res.json("success");
  } catch (e) {
    console.error(e.massage);
  }
});

app.listen(5000, () => {
  console.log("servre has started on port 5000");
});

// Routes GARAGE

app.get("/garage/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [
      id,
    ]);

    const cars = await pool.query("SELECT * FROM cars WHERE user_id = $1", [
      id,
    ]);

    res.json({ user: user.rows[0], cars: cars.rows });
  } catch (e) {
    console.error(e.massage);
  }
});

app.delete("/garage/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const { carId } = req.body;

    await pool.query(`UPDATE cars SET user_id = null WHERE  cars_id= $1`, [
      carId,
    ]);

    res.json("success");
  } catch (e) {
    console.error(e.massage);
  }
});

app.get("/garage-cars", async (req, res) => {
  try {
    const cars = await pool.query(`SELECT * FROM cars WHERE user_id IS NULL`);

    res.json(cars.rows);
  } catch (e) {
    console.error(e.massage);
  }
});

app.put("/garage/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const { carId } = req.body;

    await pool.query(`UPDATE cars SET user_id =$1  WHERE  cars_id= $2`, [
      id,
      carId,
    ]);

    res.json("success");
  } catch (e) {
    console.error(e.massage);
  }
});
