const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");
//middleware

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("servre has started on port 5000");
});
//ROUTES//

//create a cars

app.post("/cars/add", async (req, res) => {
  try {
    const {
      name,
      price,
      year,
      brand,
      model,
      boxType,
      engineCapacity,
      img,
    } = req.body;

    const newCar = await pool.query(
      "INSERT INTO cars(name, price, year, brand, model, boxType, engineCapacity, img) VALUES($1,$2,$3,$4,$5,$6,$7, $8) RETURNING *;",
      [name, price, year, brand, model, boxType, engineCapacity, img]
    );

    res.json(newCar.rows[0]);
  } catch (err) {
    console.error(err.massage);
  }
});

//get all cars

app.get("/cars/list", async (req, res) => {
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
    const car = await pool.query(`SELECT * FROM cars WHERE id=${id}`);
    res.json(car.rows[0]);
  } catch (err) {
    console.error(err.massage);
  }
});

//update a car
app.put("/cars/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    Object.entries(body).map(async (params) => {
      console.log(params);

      if (params[1] === undefined || params[1] === null) {
        return;
      }
      return await pool.query(
        `UPDATE cars SET ${params[0]} = ${params[1]} WHERE id = ${id}`
      );
    });

    res.json("success");
  } catch (err) {
    console.error(err.massage);
  }
});

//delete a car
app.delete("/cars/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(`DELETE FROM cars WHERE id=${id}`);
    res.json("Car was deleted!");
  } catch (err) {
    console.error(err.massage);
  }
});

// user routes //

app.post("/users/add", async (req, res) => {
  try {
    const { name, email } = req.body;
    const checkEmail = await pool.query(
      `SELECT * FROM users WHERE email = ${email}`
    );
    if (checkEmail.rows[0]) {
      res.json("Такой эмаил уже существует");
    }
    const CreateUser = await pool.query(
      `INSERT INTO users(name,email) VALUES(${name},${email}) RETURNING *`
    );
    res.json(CreateUser.rows[0]);
  } catch (e) {
    console.error(e.massage);
  }
});

app.get("/users/list", async (req, res) => {
  try {
    const allPerntodo = await pool.query("SELECT * FROM users");
    res.json(allPerntodo.rows);
  } catch (e) {
    console.error(e.massage);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query(`SELECT * FROM users WHERE id = ${id}`);
    res.json(user.rows[0]);
  } catch (e) {
    console.error(e.massage);
  }
});

app.put("/users/update/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const { body } = req;

    Object.entries(body).map(async (params) => {
      if (params[1] === undefined || params[1] === null) {
        return;
      }
      return await pool.query(
        `UPDATE users SET ${params[0]} = ${params[1]} WHERE user_id = ${id}`
      );
    });

    res.json("success");
  } catch (e) {
    console.error(e.massage);
  }
});

app.delete("/users/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await pool.query(
      `DELETE FROM users WHERE user_id = ${id}`
    );
    res.json("success");
  } catch (e) {
    console.error(e.massage);
  }
});

// Routes GARAGE
app.post("/users/:id/garage/car", async (req, res) => {
  try {
    const { id } = req.params;
    const { car_id } = req.body;

    const CreateUser = await pool.query(
      "INSERT INTO garage(user_id,car_id) VALUES($1,$2) RETURNING *",
      [id, car_id]
    );

    res.json(CreateUser.rows);
  } catch (e) {
    console.error(e.massage);
  }
});

app.get("/users/:id/garage", async (req, res) => {
  try {
    const { id } = req.params;
    const garage = await pool.query(
      `SELECT * FROM garage g
      INNER JOIN user  ON user_id = ${id}
      INNER JOIN cars c ON c.id = g.car_id
      `
    );

    res.json({ garage: garage.rows });
  } catch (e) {
    console.error(e.massage);
  }
});

app.get("/users/:id/garage/other", async (req, res) => {
  try {
    const { id } = req.params;
    let garage = await pool.query(
      `SELECT car_id FROM garage g
      INNER JOIN user  ON user_id = ${id}
      `
    );
    garage = garage.rows;
    let carsGarageId = [];
    garage.map((car) => {
      carsGarageId.push(car.car_id);
    });

    let cars = await pool.query(`SELECT * FROM cars`);
    cars = cars.rows;
    const resolve = cars.filter((car) => {
      const c = car.id;
      return !carsGarageId.includes(c);
    });

    res.json({ cars: resolve });
  } catch (e) {
    console.error(e.massage);
  }
});

app.delete("/users/:id/garage/delete", async (req, res) => {
  try {
    const { id } = req.params;
    const { car_id } = req.body;
    await pool.query(
      `DELETE FROM garage WHERE (car_id=${car_id}) AND (user_id=${id})`
    );
    res.json("success delete car in garage");
  } catch (err) {
    console.error(err.massage);
  }
});
