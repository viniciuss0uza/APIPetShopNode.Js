const express = require('express')
const ControllerPessoa = require('../controllers/pessoa')

// Inicializando as rotas do express
const router = express.Router()

//Crando as rotas
router.get('/', ControllerPessoa.GetPessoas)
router.post('/', ControllerPessoa.CreatePessoa)
router.put('/:id', ControllerPessoa.UpdatePessoa)
router.delete('/:id', ControllerPessoa.DeletePessoa)

//Exportar as rotas
module.exports = router