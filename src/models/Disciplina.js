const mongoose = require('mongoose');

const disciplinaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  cargaHoraria: {
    type: Number, // em horas
    required: true,
  },
  curso: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Curso', // Relaciona a disciplina com um curso
    required: true,
  },
});

const Disciplina = mongoose.model('Disciplina', disciplinaSchema);

module.exports = Disciplina;
