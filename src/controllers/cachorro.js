const ServiceCachorro = require('../services/cachorro')

class ControllerCachorro {
    async GetCachorros(req, res) {
        try {
            const cachorros = await serviceCachorros.GetCachorros()
            res.send({ cachorros: cachorros })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    // async CreateCachorrosDono(req,res){
    //     try {
    //         const { nome, raca, peso, idPessoa } = req.body

    //         const cachorro = await ServiceCachorro.CreatePCachorros(nome, raca, peso, idPessoa)
    //         res.send({ msg: cachorro })
    //     } catch (error) {
    //         res.status(500).send({ msg: error.message })
    //     }
    // }
    async CreateCachorros(req,res){
        try {
            const { nome, raca, peso, idPessoa } = req.body

            const cachorro = await ServiceCachorro.CreatePCachorros(nome, raca, peso, idPessoa)
            res.send({ msg: cachorro })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
}

module.exports = new ControllerCachorro()