const Professor = require('../models/Professor');

// GET todos os professores
const getProfessores = async (req, res) => {
  try {
    const professores = await Professor.find();
    res.status(200).json(professores);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar professores', error });
  }
};

// POST criar um novo professor
const createProfessor = async (req, res) => {
  const { nome, matricula, area } = req.body;
  
  const novoProfessor = new Professor({
    nome,
    matricula,
    area,
  });

  try {
    await novoProfessor.save();
    res.status(201).json(novoProfessor);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar professor', error });
  }
};

module.exports = { getProfessores, createProfessor };
