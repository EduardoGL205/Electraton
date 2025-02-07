const express = require("express");
const cors = require("cors");
const fs = require("fs");
const XLSX = require("xlsx");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});

app.post("/api/postulacion", (req, res) => {
  const { nombre, semestre, matricula, carrera } = req.body;

  const nuevaPostulacion = {
    Nombre: nombre,
    Semestre: semestre,
    Matrícula: matricula,
    Carrera: carrera,
    Fecha: new Date().toISOString(),
  };

  const archivoExcel = "./postulaciones.xlsx";

  let workbook;
  let worksheet;

  if (fs.existsSync(archivoExcel)) {
    workbook = XLSX.readFile(archivoExcel);
    worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(worksheet);
    data.push(nuevaPostulacion);
    worksheet = XLSX.utils.json_to_sheet(data);

    delete workbook.Sheets["Postulaciones"];
    workbook.SheetNames = workbook.SheetNames.filter(name => name !== "Postulaciones");
  } else {
    workbook = XLSX.utils.book_new();
    worksheet = XLSX.utils.json_to_sheet([nuevaPostulacion]);
  }

  XLSX.utils.book_append_sheet(workbook, worksheet, "Postulaciones");
  XLSX.writeFile(workbook, archivoExcel);

  console.log("Nueva postulación registrada en Excel:", nuevaPostulacion);

  res.json({ message: "Postulación recibida y guardada en Excel con éxito" });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
