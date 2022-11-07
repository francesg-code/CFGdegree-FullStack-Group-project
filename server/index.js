// const bodyParser = require("body-parser");

const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2");

app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hba",
});

app.use(cors());

app.post("/carbs", (req, res) => {
  const foodQuery = req.body.foodQuery;

  db.query(
    "SELECT carbs FROM food_nutrients WHERE food_name = ?",
    [foodQuery],
    (err, result) => {
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Food not found" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("running server");
});
