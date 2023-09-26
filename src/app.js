const express = require("express");
const { dbConnection } = require("./database/config");
const cors = require("cors");
const app = express();

require("dotenv").config();

dbConnection();

app.use(express.json());
app.use(cors());
app.use("/admin", require("./routes/admin"));
app.use("/auth", require("./routes/login"));
app.use("/auth", require("./routes/register"));
app.listen(process.env.PORT, () => {
  console.log(`Servidor en el puerto ${process.env.PORT}`);
});
