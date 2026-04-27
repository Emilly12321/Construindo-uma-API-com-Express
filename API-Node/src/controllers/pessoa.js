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

    pegarUm(req,res){
        try{
            
            const id = req.params.id;
            
            const nome = servico.pegarUm(id);

            res.status(200).json({nome});

        }catch (error){

            res.status(500).json({error: error.menssage});

        }
    }

    adicionarPessoa(req,res){
        try{
            const pessoa = req.body.nomes;
            
            servico.adicionarPessoa(pessoa);

            res.status(201).json({mensagem: "Adicionado com sucesso"});

        }catch (error){

            res.status(500).json({error: "Error"});

        }
    }


    alterarPessoa(req,res){
        try{

            const id = req.params.id;

            const pessoa = req.body.nomes;
            
            servico.alterarPessoa(id,pessoa);

            res.status(200).json({mensagem: "alterado com sucesso"});

        }catch (error){

            res.status(500).json({error: error.menssage});

        }
    }

    deletarPessoa(req,res){
        try{
            const id = req.params.id;
        
            servico.deletarPessoa(id);

            res.status(204).json({menssage: "Deletado com sucesso"});

        }catch (error){

            res.status(500).json({error: error.menssage});

        }
    }

}

module.exports = ControllerPessoa;