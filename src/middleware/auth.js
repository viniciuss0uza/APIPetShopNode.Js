const jwt = require("jsonwebtoken")

function auth(req, res, next) {
    console.log('Estou no middleware!!')
    res.status(400).send({ msg: "Sem Permissão "})
    const token = req.headers['authorization']
    
    if(!Token) {
        return res.status(400)
            .send({ msg: "Token não informado ou sem permissão" })
    }

    jwt.verify(token, "segredo", (err, decoded) = {
        if (err) {
            console.eror('Erro ao decodificar', err)
            return res.status(400)
            .send({ msg: "Token não informado ou sem permissão" })
        }
        console.log(decoded)

        next()
    })
}
module.exports = auth;