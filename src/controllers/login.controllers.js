const User = require("../model/user-model");
const bcrypt = require("bcrypt");

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    const passwordExist = bcrypt.compareSync(password, userExist.password);
    if (email.trim() === "" || password.trim() === "")
      return res
        .status(400)
        .json({ msg: "Todos los campos son obligatorios." });
    if (!userExist)
      return res.status(400).json({ msg: "E-mail o contraseña invalida." });
    if (!passwordExist)
      return res.status(400).json({ msg: "E-mail o contraseña invalida" });

    res.status(201).json({
      msg: "Usuario Registrado",
      token,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
}

module.exports = {
  loginUser,
};
