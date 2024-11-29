const Aluno = require('../models/Aluno');

// GET todos os alunos
const getAlunos = async (req, res) => {
  try {
    const alunos = await Aluno.find();
    res.status(200).json(alunos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar alunos', error });
  }
};

// POST criar um novo aluno
const createAluno = async (req, res) => {
  const { nome, idade, matricula } = req.body;
  
  const novoAluno = new Aluno({
    nome,
    idade,
    matricula,
  });

  try {
    await novoAluno.save();
    res.status(201).json(novoAluno);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar aluno', error });
  }
};

module.exports = { getAlunos, createAluno };
