const crearUsuario = (req, res) => {
  const { name, age } = req.body;

  res.json({
    msg: "Usuario Registrado ",
  });
};
const loginUsuario = (req, res) => {
  res.send("Usuario Logueado");
};

module.exports = {
  crearUsuario,
  loginUsuario,
};
