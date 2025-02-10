const db = require('../db/models');
const { scryptSync } = require('crypto')
const { hashearSenha } = require('../middlewares/hashearPassword')

class UsuarioController {
    static async get(req, res) {
        try {
            console.log(req.body)
            const listaDeUsuarios = await db.Usuario.findAll();
			return res.status(200).json(listaDeUsuarios);
        } catch(erro) {
            console.error(erro); // Para debugar o erro
            return res.status(404).json({ message: "Erro ao buscar usuários" });
        }
    }

    static async register(req, res) {
        console.log(req.body)
        const { nome, email, senha } = req.body

        try {
            const user = await db.Usuario.findAll({
                where: {
                    email: email,
                }
            })

            if(user && user.length > 0) {
                return res.status(409).send({ message: "Usuário já cadastrado"})
            }
        //  console.log(nome, email, senha)
            const { salt, hashPassword } = await hashearSenha(senha);
         // console.log(salt, hashPassword)
            const newUser = await db.Usuario.create({ 
                nome, 
                email, 
                senha: hashPassword,
                salt
            })

            
            res.redirect(201, '/')
        } catch(error) {
            console.log(error)
            return res.status(500).json({ message: "Erro ao realizar registro"});
        }
    }

    static async login(req, res) {
        const { email, senha } = req.body

        try {
            const user = await db.Usuario.findAll({
                where: {
                    email: email
                }
            })

           // console.log(user)
            if(!user) {
                return res.status(404).send({ message: "Usuário ou senha inválidos"})
            }

            //console.log(user)

            const salt = user[0].salt
            //console.log(salt)
            const loginPassword = scryptSync(senha, salt, 64).toString('hex')
            //console.log(`Senha atual: ${loginPassword}`)
            //console.log(`Senha do Usuário: ${user[0].senha}`)

            if(loginPassword === user[0].senha) {
                return res.redirect(200, '/calculadora')
            }
        }catch(err) {
            res.status(500).send("Usuário ou senha inválida")
        }
    }

    static async logout(req, res) {
        return res.redirect(200, '/')
    }
}

module.exports = UsuarioController;