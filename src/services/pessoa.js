const ModelPessoa = require ('../models/pessoa')

//criando a classe servicePessoa
class ServicePessoa {
    async GetPessoas() {
        return ModelPessoa.findAll()
    }
    async CreatePessoa(name, password, email) {
        //vinicius
        //indefined: indefinido
        //if(name === undefined)
        if (!name || !password || !email) {
            throw new Error("Favor preecher todos os dados!")
        } 
        // fazer verificações - se mandou o name
        return ModelPessoa.create({ name, password, email })
    }
    async UpdatePessoa(id, name, password, email) {
        // fazer verificações - se mandou o id e o name

        // return ModelPessoa.update({ name, password, email },
        //      { where: { id } })
        if(!id) {
            throw new Error("Pessoa não encontrada")
        }
        const pessoa = await ModelPessoa.findByPk(id)
        if(!pessoa) {
            throw new Error("Pessoa não encontrada")
        }
        pessoa.name = name || pessoa.name
        pessoa.password = password || pessoa.password
        pessoa.email = email || pessoa.email

        pessoa.save()
        return pessoa
    }
    
    async DeletePessoa(id) {
        // fazer verificações - se mandou o id
        if(!id) {
            throw new Error("favor informar Id")
        }
        const pessoa = await ModelPessoa.findByPk(id)
        if(!pessoa) {
            throw new Error("Pessoa não encontrada")
        }
        // 
        return pessoa.destroy()
    }
}
module.exports = new ServicePessoa()