const mysql = require('mysql2');

// Criar o pool de conexões com o banco de dados
const pool = mysql.createPool({
    host: 'localhost',   // ou o endereço do seu servidor de banco de dados
    user: 'root',        // seu usuário do MySQL
    password: 'Online123@',        // sua senha do MySQL
    database: 'renegociacao_dividas',  // nome do banco de dados
    waitForConnections: true, // Espera por conexões disponíveis no pool
    connectionLimit: 10, // Limite de conexões simultâneas no pool
    queueLimit: 0        // Nenhum limite na fila de espera
});

// Exportar o pool para uso em outras partes do projeto
module.exports = pool.promise(); // Usando o método `promise()` para usar `async/await`
