const express = require('express')
const routersPerson = require('./src/routes/pessoa')
const routersDog = require('./src/routes/cachorro')
const database = require('./src/config/database')
// Instanciar um express
const app = express()
app.use(express.json())
app.use("/person", routersPerson)
app.use(routersDog)
const PORT = 3000

database.db
    .sync({ force: false })
    .then((_) => {
        console.info("Banco conectado com sucesso!!")
        app.listen(PORT, () => {
            console.info(`Servidor rodando na porta ${PORT}`)
         
        })
    })
    .catch((e) => {
        console.error('Conexão falhou: ${e}')
    })
