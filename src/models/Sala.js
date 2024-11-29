const mongoose = require('mongoose');

const salaSchema = new mongoose.Schema({
  numero: {
    type: String,
    required: true,
  },
  capacidade: {
    type: Number, // número de cadeiras
    required: true,
  },
  tipo: {
    type: String, // Exemplo: "Laboratório", "Auditório", "Sala de Aula"
    required: true,
  },
});

const Sala = mongoose.model('Sala', salaSchema);

module.exports = Sala;
