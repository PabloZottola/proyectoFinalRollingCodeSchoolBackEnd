const express = require("express");
const { dbConnection } = require("./database/config");
const cors = require("cors");
const app = express();

require("dotenv").config();

dbConnection();

app.use(express.json());
app.use(cors());
app.use("/auth", require("./routes/register"));
app.use("/auth", require("./routes/crearAlumnosRoutes"));

app.listen(process.env.PORT, () => {
  console.log(`Servidor en el puerto ${process.env.PORT}`);
});
