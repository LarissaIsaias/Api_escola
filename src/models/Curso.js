const mongoose = require('mongoose');

const cursoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  duracao: {
    type: Number, // em anos
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
});

const Curso = mongoose.model('Curso', cursoSchema);

module.exports = Curso;
