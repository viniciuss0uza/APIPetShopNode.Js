const express = require('express')
const ControllerPessoa = require('../controllers/pessoa')

// Inicializando as rotas do express
const router = express.Router()

//Crando as rotas
router.post('/', ControllerPessoa.CreatePessoa)

router.get('/', auth, ControllerPessoa.GetPessoas)
router.put('/:id', auth, ControllerPessoa.UpdatePessoa)
router.delete('/:id', auth, ControllerPessoa.DeletePessoa)

//Exportar as rotas
module.exports = router