const mongoose = require('mongoose');

const professorSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  matricula: {
    type: String,
    required: true,
    unique: true,
  },
  area: {
    type: String,
    required: true,
  },
});

const Professor = mongoose.model('Professor', professorSchema);

module.exports = Professor;
