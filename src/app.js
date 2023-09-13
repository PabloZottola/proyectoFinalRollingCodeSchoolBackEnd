const express = require("express");
const { dbConnection } = require("./database/config");
const app = express();

require("dotenv").config();

dbConnection();

app.use(express.json());
app.use("/auth", require("./routes/register"));
app.listen(process.env.PORT, () => {
  console.log(`Servidor en el puerto ${process.env.PORT}`);
});