const express = require('express');
const router = express.Router(); // Define o objeto 'router' corretamente
const pool = require('../../db/connect'); // Importa o pool de conexões (caso esteja usando)

router.get('/debts/:cpf', async (req, res) => {
    const cpf = req.params.cpf;

    // Normalizar o CPF (remover pontos e traços)
    const formattedCpf = cpf.replace(/[^\d]/g, ''); // Remove qualquer caractere não numérico

    try {
        const [rows] = await pool.execute(
            'SELECT * FROM dividas WHERE REPLACE(REPLACE(cpf, \'.\', \'\'), \'-\', \'\') = ? OR cpf = ?',
            [formattedCpf, cpf] // Formato sem ponto/traço ou com ponto/traço
        );

        if (rows.length > 0) {
            res.json(rows); // Retorna as dívidas em formato JSON
        } else {
            res.status(404).json({ message: "Dívidas não encontradas para o CPF informado." });
        }
    } catch (error) {
        console.error("Erro ao buscar dívidas:", error);
        res.status(500).json({ message: "Erro ao buscar dívidas.", error: error.message });
    }
});

// Exporta o router para ser usado no arquivo principal
module.exports = router;
