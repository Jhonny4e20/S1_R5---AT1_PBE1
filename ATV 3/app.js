const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json());

app.post('/login', (req, res) => {
    try {
        const {login} = req.body

        if (login.usuario != "João Pedro" || login.senha != "12345") {
            return res.status(401).json({errorMessage: `Usuário ou Senha Incorretos!`});
        }
        
        res.status(201).json({message: 'Mensagem criada com sucesso'});
        console.log(login.usuario, login.senha);

    } catch (error) {
        console.error(`Erro: `, error);
        res.status(500).json({errorMessage: error });

    }

});


app.listen(PORT, () => {
    console.log(`Servidor rodando em localhost:${PORT}`);
})