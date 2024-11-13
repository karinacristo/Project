const express = require('express');
const cors = require('cors');  // Adicionando o CORS
const app = express();
const mysql = require('mysql2');
const router = require('./routes/debts');

// Configuração do banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Online123@',
    database: 'renegociacao_dividas'
});

// Conexão com o banco de dados
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados!');
});

// Usar o CORS para permitir acesso de origens diferentes
app.use(cors());  // Isso vai permitir que qualquer origem acesse sua API

// Usar JSON
app.use(express.json());

// Usar a rota de 'debts'
app.use(router);

// Iniciar o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
