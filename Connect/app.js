const express = require("express");
const app = express();

// ejs
app.set("view engine", "ejs");

//cors
const cors = require('cors')

// mysql

// rotas

app.get("/", cors(), (req, res, next) => {
  // res.render("secao/postagem");
  const mysql = require("mysql");
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "fulleletronicos",
  });

  connection.query("select * from nossosprodutos", (error, result) => {
    //console.log(result);
    //res.render("secao/postagem", { postagem: result });
    res.json( result )
    //retorna array de um dado
  })
});


app.listen(1910, () => {
  console.log("Servidor rodando na 1910");
});
