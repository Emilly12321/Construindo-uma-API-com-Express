const banco = new Array("joao", "ana", "maria");

class RepositoryPessoa{


    pegarTodos(){

        return banco;

    }

    pegarUm(index){

        return banco[index];

    }

    adicionarPessoa(nome){

        banco.push(nome);

    }

    alterarPessoa(index, nome){

        banco[index] = nome;

    }

    deletarPessoa(index){

        banco.splice(index, 1);

    }

}

module.exports = RepositoryPessoa;
