const User = require("../model/user-model");

async function ListAlumnos(req, res) {
  try {
    const user = await User.find();

    res.json({
      msg: "usuarios enviados",
      user,
    });
  } catch (error) {
    res.json({
      msg: "Hable con el administrador",
    });
  }
}

module.exports = {
  ListAlumnos,
};
