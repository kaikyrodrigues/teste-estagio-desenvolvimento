const express = require('express');

const app = express();
const porta = 3000;

app.get('/status', (req, res)=>{
    res.json({status: 'ok'})
})

app.listen(porta, ()=> {
    console.log(`Servidor rodando na porta: ${porta}`);
})