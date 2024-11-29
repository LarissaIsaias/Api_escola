const mongoose = require('mongoose');

const alunoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  idade: {
    type: Number,
    required: true,
  },
  matricula: {
    type: String,
    required: true,
    unique: true,
  },
});

const Aluno = mongoose.model('Aluno', alunoSchema);

module.exports = Aluno;
