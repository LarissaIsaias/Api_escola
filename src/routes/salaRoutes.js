const express = require('express');
const router = express.Router();
const salaController = require('../controllers/salaController');

// Rota para pegar todas as salas
router.get('/salas', salaController.getSalas);

// Rota para criar uma nova sala
router.post('/salas', salaController.createSala);

// Rota para atualizar uma sala
router.put('/salas/:id', salaController.updateSala);

// Rota para deletar uma sala
router.delete('/salas/:id', salaController.deleteSala);

module.exports = router;
