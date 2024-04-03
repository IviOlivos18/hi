const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require('fs');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "olivos.ivi18",
  database: "plantas",
});

connection.connect(err => {
  if (err) {
    throw err;
  } else {
    console.log("Conectado a la base de datos MySQL");
  }
});

app.post("/submit", upload.single("show"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No se cargó ningún archivo" });
  }

  fs.readFile(req.file.path, (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      return res.status(500).json({ message: "Error al procesar los datos" });
    }

    const { name, name_cientific, type_plant, ph } = req.body;
    const fileData = data;

    const sql = "INSERT INTO plants (name, name_cientific, data, ph, type_plant) VALUES (?, ?, ?, ?, ?)";
    const values = [name, name_cientific, fileData, ph, type_plant];

    connection.query(sql, values, (error, results) => {
      if (error) {
        console.error("Error al insertar los datos:", error);
        res.status(500).json({ message: "Error al procesar los datos" });
      } else {
        console.log("Datos insertados correctamente");
        res.status(200).json({ message: "Datos recibidos y procesados" });
      }
    });
  });
});

app.use("/submot", (req, res) => {
  const sql = "SELECT name, name_cientific, ph, type_plant, data FROM plants";
  connection.query(sql, (error, results) => {
    if (error) {
      console.error("Error al realizar la consulta:", error);
      res.status(500).json({ message: "Error al realizar la consulta" });
    } else {
      const plantsWithImagePath = results.map((plant) => ({
        ...plant,
        imagePath: `data:image/jpeg;base64,${plant.data.toString("base64")}`,
      }));

      res.json(plantsWithImagePath);
    }
  });
});
app.use(express.static('public'));

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    console.error(err);
    res.status(500).json({ message: "Error al cargar el archivo" });
  } else if (err) {
    console.error(err);
    res.status(500).json({ message: "Error desconocido" });
  }
  next(err);
});

app.listen(9000, () => console.log("Servidor corriendo en el puerto 9000"));