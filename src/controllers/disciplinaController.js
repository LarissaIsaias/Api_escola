const Disciplina = require('../models/Disciplina');

// GET todas as disciplinas
const getDisciplinas = async (req, res) => {
  try {
    const disciplinas = await Disciplina.find().populate('curso');
    res.status(200).json(disciplinas);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar disciplinas', error });
  }
};

// POST criar uma nova disciplina
const createDisciplina = async (req, res) => {
  const { nome, cargaHoraria, curso } = req.body;
  
  const novaDisciplina = new Disciplina({
    nome,
    cargaHoraria,
    curso,
  });

  try {
    await novaDisciplina.save();
    res.status(201).json(novaDisciplina);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar disciplina', error });
  }
};

module.exports = { getDisciplinas, createDisciplina };
