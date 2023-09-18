const User = require("../model/user-model");
const bcrypt = require("bcrypt");

async function accountCreation(req, res) {
  const { firstName, lastName, phone, email, password, repeatPassword } =
    req.body;

  try {
    const emailExist = await User.findOne({ email });
    const phoneExist = await User.findOne({ phone });

    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      phone.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    )
      return res.json({ msg: "Todos los campos son obligatorios." });
    if (/\d/.test(firstName) || firstName.length < 2)
      return res.json({ msg: "Nombre invalido." });
    if (/\d/.test(lastName) || lastName.length < 2)
      return res.json({ msg: "Apellido invalido." });
    if (
      /[a-zA-Z]/.test(phone) ||
      phone.length < 9 ||
      phone.length > 10 ||
      phoneExist
    )
      return res.json({ msg: "Numero de telefono invalido." });
    if (!validateEmail(email) || emailExist)
      return res.json({ msg: "E-mail no valido." });
    if (password.length <= 5) return res.json({ msg: "Contraseña invalida." });
    if (password !== repeatPassword)
      return res.json({ msg: "Las contraseña no coinciden" });

    const user = new User(req.body);
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(password, salt);
    await user.save();

    res.json({
      msg: "Usuario Registrado ",
    });
  } catch (error) {
    console.log(error);
  }
}
function validateEmail(email) {
  const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const validateEmail = regEx.test(email);
  return validateEmail;
}

module.exports = {
  accountCreation,
};
