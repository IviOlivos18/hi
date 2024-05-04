const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 9000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("¡Hola desde el servidor Express!");
});


app.post("/", (req, res) => {
  console.log("Datos recibidos:", req.body);
  res.send("Datos recibidos correctamente");
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});