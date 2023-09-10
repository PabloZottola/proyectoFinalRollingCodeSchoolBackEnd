const crearUsuario = (req, res) => {
  const {
    firstName,
    lastName,
    phone,
    birthday,
    email,
    address,
    password,
    repeatPassword,
  } = req.body;
  console.log(req.body);
  if (
    firstName === "" ||
    lastName === "" ||
    phone === "" ||
    birthday === "" ||
    email === "" ||
    address === "" ||
    password === "" ||
    repeatPassword === ""
  )
    return res.json({ msg: "Todos los campos son obligatorios" });
  res.json({
    msg: "Usuario Registrado ",
  });
};

module.exports = {
  crearUsuario,
};
