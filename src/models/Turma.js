const mongoose = require('mongoose');

const turmaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  disciplina: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Disciplina', // Relaciona a turma com uma disciplina
    required: true,
  },
  ano: {
    type: Number,
    required: true,
  },
  semestre: {
    type: String,
    required: true,
  },
});

const Turma = mongoose.model('Turma', turmaSchema);

module.exports = Turma;
