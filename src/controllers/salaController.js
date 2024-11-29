const Sala = require('../models/Sala');

// GET todas as salas
const getSalas = async (req, res) => {
  try {
    const salas = await Sala.find();
    res.status(200).json(salas);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar salas', error });
  }
};

// POST criar uma nova sala
const createSala = async (req, res) => {
  const { numero, capacidade, tipo } = req.body;

  const novaSala = new Sala({
    numero,
    capacidade,
    tipo,
  });

  try {
    await novaSala.save();
    res.status(201).json(novaSala);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar sala', error });
  }
};

// PUT atualizar uma sala existente
const updateSala = async (req, res) => {
  const { id } = req.params;
  const { numero, capacidade, tipo } = req.body;

  try {
    const sala = await Sala.findByIdAndUpdate(id, { numero, capacidade, tipo }, { new: true });
    if (!sala) {
      return res.status(404).json({ message: 'Sala não encontrada' });
    }
    res.status(200).json(sala);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar sala', error });
  }
};

// DELETE remover uma sala
const deleteSala = async (req, res) => {
  const { id } = req.params;

  try {
    const sala = await Sala.findByIdAndDelete(id);
    if (!sala) {
      return res.status(404).json({ message: 'Sala não encontrada' });
    }
    res.status(200).json({ message: 'Sala removida com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover sala', error });
  }
};

module.exports = { getSalas, createSala, updateSala, deleteSala };
