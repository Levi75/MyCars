const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");
//middleware
app.use(cors());
app.use(express.json());
//ROUTES//
//create a cars
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
