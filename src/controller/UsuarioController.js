const db = require("../db/models");
const { hashearSenha } = require('../middlewares/hashearPassword');

class UsuarioController {
    static async buscaTodos(req, res) {
        try {
            const listaDeUsuarios = await db.Usuario.findAll();
			return res.status(200).json(listaDeUsuarios);
        } catch(erro) {
            console.error(erro); // Para debugar o erro
            return res.status(500).json({ mensagem: "Erro ao buscar usuários" });
        }
    }

    static async register(req, res) {
        console.log(req.body);
        const { nome, email, senha } = req.body
        const hashPassword = await hashearSenha(senha);
        try {
            const usuario = await db.Usuario.create({ 
                nome, 
                email, 
                senha: hashPassword 
            })

            return res.status(201).send(usuario);
        } catch(error) {
            return res.status(500).json({ message: "Erro ao realizar registro"});
        }
    }
}

module.exports = UsuarioController;