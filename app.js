const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

//rutas
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views/home.html"));
});
app.post("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views/home.html"));
});
app.get("/register.html", function (req, res) {
  res.sendFile(path.join(__dirname, "views/register.html"));
});
app.get("/login.html", function (req, res) {
  res.sendFile(path.join(__dirname, "views/login.html"));
});

/* app.listen(3000, () => {
  console.log("Success");
}); */

const port = process.env.PORT || 3001;
app.listen(port, ()=> console.log(`Servidor corriendo en el puerto ${port}`))