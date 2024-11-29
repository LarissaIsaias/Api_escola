const express = require('express');
const router = express.Router();
const disciplinaController = require('../controllers/disciplinaController');

router.get('/disciplinas', disciplinaController.getDisciplinas);
router.post('/disciplinas', disciplinaController.createDisciplina);

module.exports = router;

