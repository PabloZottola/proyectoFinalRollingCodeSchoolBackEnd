const { Schema, model } = require("mongoose");

const userSchema = Schema({
    nameForm: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    message: {
        type: String,
    },
});

module.exports = model("modelMessageForm", userSchema);
