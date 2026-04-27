const express = require ("express");
const ControllerPessoa = require("../controllers/pessoa");

const controller = new ControllerPessoa();
const router = express.Router();

router.get('/api/v1/nomes', controller.pegarTodos );
router.get('/api/v1/nome/:id', controller.pegarUm);
router.post('/api/v1/nome', controller.adicionarPessoa);
router.put('/api/v1/nome/:id', controller.alterarPessoa);
router.delete('/api/v1/nome/:id', controller.deletarPessoa);

module.exports = router;