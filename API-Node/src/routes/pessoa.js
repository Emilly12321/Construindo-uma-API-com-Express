const express = require ("express");
const ControllerPessoa = require("../controllers/pessoa");

const controller = new ControllerPessoa();
const router = express.Router();

router.get('/api/v1/nomes', controller.pegarTodos );

module.exports = router;