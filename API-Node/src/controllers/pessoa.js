const ServicePessoa = require("../services/pessoa");

const servico = new ServicePessoa;

class ControllerPessoa{

    pegarTodos(req,res){
        try{
            
            const nomes = servico.pegarTodos();

            res.status(200).json({nomes});

        }catch (error){

            res.status(500).json({error: error.menssage});

        }
    }

}

module.exports = ControllerPessoa;