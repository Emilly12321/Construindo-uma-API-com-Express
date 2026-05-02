const { describe, expect, it } = require('@jest/globals');
const ServicePessoa = require("../src/services/pessoa");

describe("Primeiro teste de pessoa", () => {

    const service = new ServicePessoa();

    it("Pegando um nome na lista", () => {

        const index = 2;

        const nome = service.pegarUm(index);

        console.log("Pegando o ", nome);

        expect(nome).not.toBeUndefined;

    });

     it("Pegando todos os nomes na lista", () => {


        const nomes = service.pegarTodos();

        console.log("Pegando os nomes ", nomes);

        expect(nomes).not.toBeUndefined;

    });


    it("Add um nome na lista", () => {

        // efetuamos uma variavel chamada nomeTeste, onde recebe um string de Nome para ser adicionado no array nomes
        const nomeTeste = "EmillyTest";
        // executamos a funcao manualmente, passando como parametro o nome teste
        service.adicionarPessoa(nomeTeste);



        // criamos uma variavel que usara a funcao pegarTodos, para mostrar os resultados que ha dentro da nossa array
        const nomes = service.pegarTodos();

        console.log("ADD", nomes);

        // esperamos que dentro da array Nomes, na ultima posicao, tenha / exista o valor que contem dentro da variavel NomeTeste = Emilly
        expect(nomes[nomes.length - 1]).toBe(nomeTeste);

    });

    it("Update um nome na lista", () => {

        const nomeTeste = "Emilly";
        const index = 2;

        service.alterarPessoa(index, nomeTeste);

        const nomes = service.pegarTodos();

        console.log("UPDATE", nomes);

        // expect(nomes[nomes.length - 2]).toBe(nomeTeste);
        expect(nomes[index]).toBe(nomeTeste);

    });

    it("Deletando um nome na lista", () => {

        const index = 2;

        const nomeAntes = service.pegarUm(index)

        service.deletarPessoa(index);

        const nomeDepois = service.pegarUm(index);

        console.log("Delete", nomeAntes, nomeDepois);

        // expect(nomes[nomes.length - 2]).toBe(nomeTeste);
        // expect(nome).toBeUndefined;
        expect(nomeAntes).not.toBe(nomeDepois);

    });

});


