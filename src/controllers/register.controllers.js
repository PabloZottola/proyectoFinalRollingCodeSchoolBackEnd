const Teacher = require("../model/Teacher-model");
const bcrypt = require("bcrypt");

async function accountCreation(req, res) {
  const { firstName, lastName, phone, email, password, repeatPassword } =
    req.body;

  try {
    const emailExist = await Teacher.findOne({ email });
    const phoneExist = await Teacher.findOne({ phone });

    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      phone.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    )
      return res
        .status(400)
        .json({ msg: "Todos los campos son obligatorios." });
    if (/\d/.test(firstName) || firstName.length < 2 || lastName.length > 24)
      return res.status(400).json({ msg: "Nombre invalido." });
    if (/\d/.test(lastName) || lastName.length < 2 || lastName.length > 24)
      return res.status(400).json({ msg: "Apellido invalido." });

    if (
      /[a-zA-Z]/.test(phone) ||
      phone.length < 9 ||
      phone.length > 10 ||
      phoneExist
    )
      return res.status(400).json({ msg: "Numero de telefono invalido." });
    if (!validateEmail(email) || emailExist || email.length > 35)
      return res.status(400).json({ msg: "E-mail no valido." });
    if (password.length <= 5) return res.json({ msg: "Contraseña invalida." });
    if (password !== repeatPassword)
      return res.status(400).json({ msg: "Las contraseña no coinciden" });

    const teacher = new Teacher(req.body);
    const salt = bcrypt.genSaltSync(10);
    teacher.password = bcrypt.hashSync(password, salt);

    await teacher.save();

    res.status(201).json({
      msg: "Profesor Registrado",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Hable con el administrador",
    });
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
