const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
    senha: String,
    nome: String,
    cpf: String,
    idade: Number,
});

module.exports = mongoose.model('User', UserSchema);