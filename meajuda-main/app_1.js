const express = require('express');
const app = express();
const User = require('./models/user');

app.use(express.json());

app.get("/", async (req,res) => {
    res.send("Pagina Inicial");
});

app.post("/Cadastrar", async (req,res) => {

    console.log(req.body);

    await User.create(req.body)
    .then(() =>{
        return res.json({
            erro: false,
            mensagem: "Usuario cadastro com sucesso"
        })
    }).catch(() =>{
        return res.status(400).json({
            erro: true,
            mensagem: "Usuario nao cadastrado"
        });
    });

    res.send("Pagina Cadastrar");
});

app.listen(8080,() => {
    console.log("Servindo iniciando na porta 8080: http://localhost:8080");
});

