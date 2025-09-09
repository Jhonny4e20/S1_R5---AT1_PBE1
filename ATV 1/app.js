const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json());

app.post('/mensagem', (req, res) => { //URL para testar no Insomnia
    try {
        const { mensagem } = req.body;
        console.log(`Olá ${mensagem.nome}! Você tem ${mensagem.idade} anos e torce para o ${mensagem.time_favorito}. `)//oque irá aparecer no console
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