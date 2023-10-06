const ContactFormMessageNew = require("../model/contactFormSend-model");

async function contactForm(req, res) {
  const { nameForm, email, message } = req.body;
  try {
    if (nameForm.trim() === "" || email.trim() === "" || message.trim() === "")
      return res
        .status(400)
        .json({ msg: "Todos los campos son obligatorios." });
    if (/\d/.test(nameForm) || nameForm.length < 2 || nameForm.length > 24)
      return res.status(400).json({ msg: "Nombre inválido." });

    if (!validateEmail(email))
      return res.status(400).json({ msg: "E-mail no válido." });
    if (message.length < 3 || message.length > 300)
      return res.status(400).json({ msg: "Caracteres insuficientes." });

    const contactFormMessage = new ContactFormMessageNew(req.body);
    await contactFormMessage.save();

    res.status(201).json({
      msg: "mensaje recibido ",
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
  contactForm,
};
