const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professorController');

router.get('/professores', professorController.getProfessores);
router.post('/professores', professorController.createProfessor);

module.exports = router;
