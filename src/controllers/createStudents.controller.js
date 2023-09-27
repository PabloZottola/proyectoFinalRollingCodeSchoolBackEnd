const User = require("../model/crearAlumnos-model");

async function crearAlumnosCreation(req, res) {
    const { firstName, lastName, phone, yearOfStudy, email, } =
        req.body;

    try {

        if (
            firstName.trim() === "" ||
            lastName.trim() === "" ||
            phone.trim() === "" ||
            yearOfStudy.trim() === "" ||
            email.trim() === ""
        )
            return res.json({ msg: "Todos los campos son obligatorios." });
        if (/\d/.test(firstName) || firstName.length < 2)
            return res.json({ msg: "Nombre inválido." });
        if (/\d/.test(lastName) || lastName.length < 2)
            return res.json({ msg: "Apellido inválido." });
        if (
            /[a-zA-Z]/.test(phone) ||
            phone.length < 9 ||
            phone.length > 10)
            return res.json({ msg: "Numero de telefono inválido." });


        const userAlumnos = new userAlumnos(req.body);
        await userAlumnos.save();

        res.json({
            msg: "Alumno registrado ",
        });
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    crearAlumnosCreation,
};
