const express = require('express');
const router = express.Router();
const turmaController = require('../controllers/turmaController');

router.get('/turmas', turmaController.getTurmas);
router.post('/turmas', turmaController.createTurma);

module.exports = router;
