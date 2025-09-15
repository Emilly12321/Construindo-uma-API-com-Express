const url = "http://localhost:1010";

document.getElementById('formulario').addEventListener('submit', async function (e) {

    e.preventDefault(); // está impedindo o reload da página
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    const operacao = document.getElementById('operacao').value;

    const res = await fetch(`${url}/${operacao}?num1=${num1}&num2=${num2}`);
    console.log(`${url}/${operacao}?num1=${num1}&num2=${num2}`)
    const result = await res.json();


    document.getElementById('resultado').innerText = `Resultado: ${result.result}`;
});

document.getElementById('formulario').addEventListener('reset', function(){

    document.getElementById('resultado').innerText = " ";

})