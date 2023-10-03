const Students = require("../model/createStudents-model");
const Teacher = require("../model/user-model");

async function ListStudents(req, res) {
  try {
    const students = await Students.find();
    res.status(201).json({
      msg: "Alumnos enviados",
      students,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
}
async function NoteStudent(req, res) {
  try {
    const students = await Students.find(req.body._id);
    if (!students) {
      return res.status(400).json({
        msg: "no existe un producto con este ID para editar",
      });
    }
    await Students.findByIdAndUpdate(req.body._id, req.body);
    res.status(200).json({
      msg: "producto Editado",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
}
async function ListTeacher(req, res) {
  try {
    const teacher = await Teacher.find();
    res.status(201).json({
      msg: "Profesor enviados",
      teacher,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
}

module.exports = {
  ListStudents,
  ListTeacher,
  NoteStudent,
};
