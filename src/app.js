const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use("/auth", require("./routes/register"));

app.listen(process.env.PORT, () => {
  console.log(`Servidor en el puerto ${process.env.PORT}`);
});
