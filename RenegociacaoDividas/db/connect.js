const mysql = require('mysql2');

// Criar a conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',   // ou o endereço do seu servidor de banco de dados
    user: 'root',        // seu usuário do MySQL
    password: '',        // sua senha do MySQL
    database: 'renegociacao_dividas'  // nome do banco de dados
});

// Verificar a conexão
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados: ', err);
    } else {
        console.log('Conectado ao banco de dados!');
    }
});

module.exports = connection;
