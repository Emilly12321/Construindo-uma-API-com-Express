const RepositoryPessoa = require("../repository/pessoa");

const repo = new RepositoryPessoa();

class ServicePessoa{

    pegarTodos(){
        return repo.pegarTodos();
    }

    pegarUm(id){
        return repo.pegarUm(id);
    }

    adicionarPessoa(nome){

        return repo.adicionarPessoa(nome);
    }

    alterarPessoa(id,nome){
        return repo.alterarPessoa(id,nome);
    }

    deletarPessoa(id){

        return repo.deletarPessoa(id);

    }

}

module.exports = ServicePessoa;