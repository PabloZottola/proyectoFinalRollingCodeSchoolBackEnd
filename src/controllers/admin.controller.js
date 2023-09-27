const User = require("../model/user-model");

async function ListAlumnos(req, res) {
  try {
    const user = await User.find();
    res.status(201).json({
      msg: "usuarios enviados",
      user,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
}

module.exports = {
  ListAlumnos,
};
