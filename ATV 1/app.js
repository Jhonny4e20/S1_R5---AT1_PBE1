const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json());

app.post('/mensagem', (req, res) => {
    try {
        const { mensagem } = req.body;
        console.log(`Olá ${mensagem.nome}! Você tem ${mensagem.idade} anos e torce para o ${mensagem.time_favorito}. `)
        res.status(201).json({message: 'Mensagem criada com sucesso'});

    } catch (error) {
        console.error(`Erro: `, error);
        res.status(500).json({errorMessage: error });

    }
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em localhost:${PORT}`);
})