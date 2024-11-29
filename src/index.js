const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Carregar variáveis de ambiente
dotenv.config();

// Importar as rotas
const alunoRoutes = require('./routes/alunoRoutes');
const professorRoutes = require('./routes/professorRoutes');
const cursoRoutes = require('./routes/cursoRoutes');
const disciplinaRoutes = require('./routes/disciplinaRoutes');
const turmaRoutes = require('./routes/turmaRoutes');
const salaRoutes = require('./routes/salaRoutes');  // Importando as rotas de Sala

const dbConnection = require('./config/db');

const app = express();

// Configurar middlewares
app.use(cors());
app.use(express.json()); // Para interpretar o corpo da requisição como JSON

// Conectar ao banco de dados
dbConnection();

// Usar as rotas
app.use('/api', alunoRoutes);
app.use('/api', professorRoutes);
app.use('/api', cursoRoutes);
app.use('/api', disciplinaRoutes);
app.use('/api', turmaRoutes);
app.use('/api', salaRoutes);  // Usando as rotas de Sala

// Configurar porta e iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
