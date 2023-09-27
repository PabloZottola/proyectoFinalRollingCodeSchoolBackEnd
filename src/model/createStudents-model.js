const { Schema, model } = require("mongoose");

const userSchema = Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    yearOfStudy: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    rol: {
        type: String,
        default: "Alumno",
    },
});

module.exports = model("userStudents", userSchema);
