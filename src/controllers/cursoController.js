const Curso = require('../models/Curso');

// GET todos os cursos
const getCursos = async (req, res) => {
  try {
    const cursos = await Curso.find();
    res.status(200).json(cursos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar cursos', error });
  }
};

// POST criar um novo curso
const createCurso = async (req, res) => {
  const { nome, duracao, area } = req.body;
  
  const novoCurso = new Curso({
    nome,
    duracao,
    area,
  });

  try {
    await novoCurso.save();
    res.status(201).json(novoCurso);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar curso', error });
  }
};

module.exports = { getCursos, createCurso };
