// const http = require('http');

const express = require("express");

const { apiMultiplicar, apiSubtrair, apiDividir, apiSomar } = require("./api/operacoes");

const app = express();
const port = 5050;
app.use(express.json());


// http.createServer((req , resp) => {



// }).listen(5050)




app.get('/', (req,res)=> {

    res.send('Testando o método GET.\nFavor na URL informe um dos caminhos que deseja visualizar (/soma , /subtrair , /multiplicar  ou /dividir)')

});

app.get('/soma',apiSomar);

app.post('/subtrair', apiSubtrair);

app.post('/multiplicar',apiMultiplicar);

app.post('/dividir', apiDividir);

app.listen(port, () => {

    console.log(`Porta: http://localhost:${port}`)
})
