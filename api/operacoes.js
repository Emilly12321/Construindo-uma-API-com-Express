
const { soma, subtrair, multiplicar, dividir } = require("./services/exercicios");

function apiSomar(req,res) {
    const { num1, num2} = req.query
    const result = soma(num1,num2)
    res.send({result});
}

function apiSubtrair(req,res){
    const { num1, num2 } = req.query
    const result = subtrair(num1,num2)
    res.send({result});
}
function apiMultiplicar(req,res){
    const { num1, num2 } = req.query
    const result = multiplicar(num1,num2)
    res.send({result});
}
function apiDividir(req,res){
    const { num1, num2 } = req.query
    const result = dividir(num1,num2)
    res.send({result});
}

module.exports = {apiDividir,apiMultiplicar,apiSomar,apiSubtrair}