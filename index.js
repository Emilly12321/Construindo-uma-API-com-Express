// const http = require('http');

const express = require("express");
const app = express();
const port = 5050;
app.use(express.json());

// http.createServer((req , resp) => {



// }).listen(5050)

app.get('/', (req,res)=> {

    res.send('Testando o método GET.\nFavor na URL informe um dos caminhos que deseja visualizar (/soma , /subtrair , /multiplicar  ou /dividir)')

})

app.post('/soma', (req, res) => {
    const { num1, num2 } = req.body
    res.send(`A soma é entre os valores ${num1} e ${num2} é:  ${num1 + num2}`)

})

app.get('/subtrair', (req, res) => {

    const { num1, num2 } = req.query
    res.send(`Subtraindo o ${num1} - ${num2} = ` +(Number(num1) - Number(num2)));


})

//teste

app.get('/multiplicar', (req, res) => {
    const { num1, num2 } = req.query
    res.send(`Multipllicando o ${num1} * ${num2} = ` + (Number(num1) * Number(num2)));


})

app.get('/dividir', (req, res) => {
    const { num1, num2 } = req.query
    res.send(`Dividindo o ${num1} / ${num2} = ` + (Number(num1) / Number(num2)));


})

app.listen(port, () => {
    console.log(`Porta: ${port}`)
})
