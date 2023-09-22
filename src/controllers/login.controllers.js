const User = require("../model/user-model");
const bcrypt = require("bcrypt");

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    const passwordExist = bcrypt.compareSync(password, userExist.password);
    if (email.trim() === "" || password.trim() === "")
      return res.json({ msg: "Todos los campos son obligatorios." });
    if (!userExist) return res.json({ msg: "E-mail o contraseña invalida." });
    if (!passwordExist)
      return res.json({ msg: "E-mail o contraseña invalida" });

    res.json({
      msg: "Usuario Logeado",
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  loginUser,
};
