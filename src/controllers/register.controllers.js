const User = require("../model/user-model");

async function accountCreation(req, res) {
  const {
    firstName,
    lastName,
    phone,
    birthday,
    email,
    password,
    repeatPassword,
  } = req.body;

  try {
    const emailExist = await User.findOne({ email });
    const phoneExist = await User.findOne({ phone });

    if (
      checkEmptySpacesRegister_P(
        firstName,
        lastName,
        phone,
        birthday,
        email,
        password,
        repeatPassword
      )
    )
      return res.json({ msg: "Todos los campos son obligatorios." });
    if (/\d/.test(firstName)) return res.json({ msg: "Nombre invalido." });
    if (firstName.length < 2) return res.json({ msg: "Nombre invalido." });
    if (/\d/.test(lastName)) return res.json({ msg: "Apellido invalido." });
    if (lastName.length < 2) return res.json({ msg: "Apellido invalido." });
    if (/[a-zA-Z]/.test(phone))
      return res.json({ msg: "Numero de telefono invalido." });
    if (phone.length < 9 || phone.length > 10)
      return res.json({ msg: "Numero de telefono invalido." });
    if (phoneExist) return res.json({ msg: "Numero de telefono invalido." });
    if (/[a-zA-Z]/.test(birthday))
      return res.json({ msg: "Numero de cumpleaños invalido." });
    if (!validateEmail(email)) return res.json({ msg: "E-mail no valido." });
    if (emailExist) return res.json({ msg: "E-mail no valido." });
    if (password.length <= 5) return res.json({ msg: "Contraseña invalida." });
    if (password !== repeatPassword)
      return res.json({ msg: "Las contraseña no coinciden" });

    const user = new User(req.body);
    await user.save();

    res.json({
      msg: "Usuario Registrado ",
    });
  } catch (error) {
    console.log(error);
  }
}

function checkEmptySpacesRegister_P(
  firstName,
  lastName,
  phone,
  birthday,
  email,
  password,
  repeatPassword
) {
  if (
    firstName.trim() === "" ||
    lastName.trim() === "" ||
    phone.trim() === "" ||
    birthday.trim() === "" ||
    email.trim() === "" ||
    password.trim() === "" ||
    repeatPassword.trim() === ""
  ) {
    return true;
  } else {
    return false;
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
