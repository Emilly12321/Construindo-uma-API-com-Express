// const http = require('http');


const express = require("express");

const cors = require("cors");

const app = express();
const port = 1000;

const { apiSomar, apiSubtrair, apiMultiplicar, apiDividir } = require("./operacoes");

app.use(express.json());

// navegador não bloquear o acesso do  front
app.use(cors()) 

// http.createServer((req , resp) => {

// }).listen(5050)

app.get('/', (req, res)=> {

    res.send('Testando o método GET.\nFavor na URL informe um dos caminhos que deseja visualizar (/soma , /subtrair , /multiplicar  ou /dividir)')

});

app.get('/soma', apiSomar);
app.get('/subtrair', apiSubtrair);
app.get('/multiplicar', apiMultiplicar);
app.get('/dividir', apiDividir);



app.listen(port, () => {
    console.log(`Porta: http://localhost:${port}`)
})
