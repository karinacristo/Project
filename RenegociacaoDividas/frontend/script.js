async function fetchDebts() {
    const cpf = document.getElementById('cpf').value;

    try {
        // Faz a requisição GET para a API
        const response = await fetch(`http://localhost:3000/debts/${cpf}`);

        // Verifica se a resposta foi bem-sucedida
        if (response.ok) {
            const debts = await response.json();
            displayDebts(debts);
        } else {
            throw new Error('Não foi possível buscar as dívidas');
        }
    } catch (error) {
        console.error('Erro ao buscar dívidas:', error);
        document.getElementById('result').innerText = 'Erro ao buscar dívidas.';
    }
}

function displayDebts(debts) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (debts.length === 0) {
        resultDiv.innerText = 'Nenhuma dívida encontrada.';
    } else {
        const list = document.createElement('ul');
        debts.forEach(debt => {
            const listItem = document.createElement('li');
            listItem.textContent = `ID: ${debt.id}, Valor: ${debt.valor}, Data: ${debt.data_vencimento}, Status: ${debt.status}, Descrição: ${debt.descricao}`;
            list.appendChild(listItem);
        });
        resultDiv.appendChild(list);
    }
}
