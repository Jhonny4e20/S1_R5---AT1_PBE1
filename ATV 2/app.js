const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json());

app.post('/soma', (req, res) => {//URL para testar no Insomnia
    try {
        const { soma } = req.body;
        let resultado = soma.numUM + soma.numDOIS + soma.numTRES;
        console.log(`A soma dos números é ${resultado}.`);//oque irá aparecer no console
        res.status(201).json({message: 'Mensagem criada com sucesso'});//para que o usuário tenha certeza que sua mensagem foi criada

    } catch (error) {
        //Mensagem de erro
        console.error(`Erro: `, error);
        res.status(500).json({errorMessage: error });

    }
});


app.listen(PORT, () => {//inicia o servidor
    console.log(`Servidor rodando em localhost:${PORT}`);
})