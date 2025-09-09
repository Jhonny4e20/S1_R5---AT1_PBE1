const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json());

app.post('/soma', (req, res) => {
    try {
        const { soma } = req.body;
        let resultado = soma.numUM + soma.numDOIS + soma.numTRES;
        console.log(`A soma dos números é ${resultado}.`);
        res.status(201).json({message: 'Mensagem criada com sucesso'});

    } catch (error) {
        console.error(`Erro: `, error);
        res.status(500).json({errorMessage: error });

    }
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em localhost:${PORT}`);
})