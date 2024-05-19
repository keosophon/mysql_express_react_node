const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
app.use(cors());
app.use(express.json());

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "crud",
});

mysqlConnection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database" + err.stack);
    return;
  }
  console.log(
    "Successfully connected to MySQL database as ID:" + mysqlConnection.threadId
  );
});

app.get("/", (req, res) => {
  const sql = "select * from employee";
  mysqlConnection.query(sql, (err, data) => {
    if (err) return res.json("Cannot get data from server" + err.stack);
    res.json(data);
  });
});

app.post("/create", (req, res) => {
  const { userName, email } = req.body;
  const query = "INSERT INTO employee (username, email) VALUES (?, ?)";
  mysqlConnection.query(query, [userName, email], (error, results) => {
    if (error) return res.json("error");
    res.json(results);
  });
});

app.delete("/student/:id", (req, res) => {
  const query = "Delete From Employee where id = ?";
  const id = req.params.id;
  console.log(id);
  mysqlConnection.query(query, [id], (error, results) => {
    if (results) return res.json(results);
    res.json("error");
  });
});

app.listen("8000", () => {
  console.log("server is running");
});
