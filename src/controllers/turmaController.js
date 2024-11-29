const Turma = require('../models/Turma');

// GET todas as turmas
const getTurmas = async (req, res) => {
  try {
    const turmas = await Turma.find().populate('disciplina');
    res.status(200).json(turmas);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar turmas', error });
  }
};

// POST criar uma nova turma
const createTurma = async (req, res) => {
  const { nome, disciplina, ano, semestre } = req.body;
  
  const novaTurma = new Turma({
    nome,
    disciplina,
    ano,
    semestre,
  });

  try {
    await novaTurma.save();
    res.status(201).json(novaTurma);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar turma', error });
  }
};

module.exports = { getTurmas, createTurma };
