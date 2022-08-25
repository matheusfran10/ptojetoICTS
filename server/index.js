const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require('body-parser');

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Fla@1981",
  database: "crudprodutos",
});

app.use(cors());
app.use(express.json());

res.json(req.body);

app.post("/register", (req, res) => {
    const { nome } = req.body;
    const { quantidade } = req.body;
    const { valor } = req.body;
    const { data } = req.body;

    let SQL = "INSERT INTO produtos (nome, quantidade, valor, data ) VALUES (  ?, ?, ?, ? )";

    db.query(SQL, [ nome, quantidade, valor, data], (err, result) => {
        console.log(err);
    });

});


app.listen(3001, () => {
  console.log("Rodando servidor na porta 3001");
});
