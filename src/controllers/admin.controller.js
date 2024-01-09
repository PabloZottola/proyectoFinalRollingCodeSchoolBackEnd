const Teacher = require("../model/Teacher-model");
const Student = require("../model/Students-model");

async function ListStudents(req, res) {
  try {
    const students = await Student.find();
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
async function EditListStudent(req, res) {
  try {
    const students = await Student.findById(req.body._id);
    if (!students) {
      return res.status(400).json({
        msg: "No existe un alumno con este ID para editar",
      });
    }
    await Student.findByIdAndUpdate(students, req.body);
    res.status(200).json({
      msg: "Alumno editado",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
}
async function EditStudentNote(req, res) {
  try {
    const student = await Student.findById(req.body._id);
    if (!student) {
      return res.status(400).json({
        msg: "No existe un alumno con este ID para editar",
      });
    }
    await Student.findByIdAndUpdate(student, { Notes: req.body.editedNotes });
    res.status(200).json({
      msg: "Alumno editado",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
}
async function DeleteListStudent(req, res) {
  try {
    const students = await Student.findById(req.params.id);
    if (!students) {
      return res.status(400).json({
        msg: "No existe un alumno con este ID para borrar",
      });
    }
    await Student.findByIdAndDelete(req.params.id);
    res.status(200).json({
      msg: "Alumno borrado",
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
  EditListStudent,
  EditStudentNote,
  DeleteListStudent,
};
