const Students = require("../model/Students-model");

async function studentsCreation(req, res) {
  const { firstName, lastName, phone, yearOfStudy, email } = req.body;
  try {
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      phone.trim() === "" ||
      yearOfStudy.trim() === "" ||
      email.trim() === ""
    )
      return res
        .status(400)
        .json({ msg: "Todos los campos son obligatorios." });
    if (/\d/.test(firstName) || firstName.length < 2)
      return res.status(400).json({ msg: "Nombre inválido." });
    if (/\d/.test(lastName) || lastName.length < 2)
      return res.status(400).json({ msg: "Apellido inválido." });
    if (/[a-zA-Z]/.test(phone) || phone.length < 9 || phone.length > 10)
      return res.status(400).json({ msg: "Número de telefono inválido." });
    if (!validateEmail(email))
      return res.status(400).json({ msg: "E-mail no válido." });

    const userStudents = new Students(req.body);
    await userStudents.save();

    res.status(201).json({
      msg: "Alumno registrado ",
    });
  } catch (error) {
    res.status(500).json({ msg: "Comuniquese con el Administrador" });
  }
}
function validateEmail(email) {
  const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const validateEmail = regEx.test(email);
  return validateEmail;
}

module.exports = {
  studentsCreation,
};
