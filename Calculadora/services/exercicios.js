function soma(num1, num2) {

    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Favor informe apenas números..");
    }
    
    return num1 + num2;
}

function subtrair(num1, num2) {

    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Favor informe apenas números..");
    }

    return num1 - num2;
}

function multiplicar(num1, num2) {

    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Favor informe apenas números..");
    }

    return num1 * num2;
}

function dividir(num1, num2) {

    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Favor informe apenas números..");
    }else if(num2 == 0){
        throw new Error("Não é possível dividir por zero");
    }

    return num1 / num2;
}

module.exports = { soma, subtrair, multiplicar, dividir }