const express = require('express');
const app = express();
const port = 3000;

// Configuração do Express para aceitar JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota inicial
app.get('/', (req, res) => {
    res.send('Bem-vindo ao sistema de renegociação de dívidas!');
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
