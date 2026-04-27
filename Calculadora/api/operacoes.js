const { multiplicar, subtrair, soma, dividir } = require("../services/exercicios");

function apiSomar(req, res) {
  try {

    const { num1, num2 } = req.body;
    const result = soma(num1, num2)

    res.status(200).send({ result });

  } catch (e) {

    res.status(500).send({ msg: e.message });


  }
}


function apiSubtrair(req, res) {

  try {


    const { num1, num2 } = req.body
    const result = subtrair(num1, num2)

    res.status(200).send({ result });

  } catch (e) {

    res.status(500).send({ msg: e.message });


  }

}



function apiMultiplicar(req, res) {

  try {

    const { num1, num2 } = req.body
    const result = multiplicar(num1, num2)
  
    res.status(200).send({ result });

  } catch (e) {

    res.status(500).send({ msg: e.message });


  }
}


function apiDividir(req, res) {

  try {

    const { num1, num2 } = req.body
    const result = dividir(num1, num2)
   
    res.status(200).send({result});

  } catch (e) {

    res.status(500).send({ msg: e.message });


  }

}

module.exports = { apiSomar, apiDividir, apiSubtrair, apiMultiplicar }
