const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');

router.get('/alunos', alunoController.getAlunos);
router.post('/alunos', alunoController.createAluno);

module.exports = router;
