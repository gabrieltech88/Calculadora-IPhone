const db = require('../db/models');
const { hashearSenha } = require('../middlewares/hashearPassword');
const { testConnection } = require('../db/config/testConnect')

class UsuarioController {
    static async buscaTodos(req, res) {
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
        try {
            await testConnection();
            const { nome, email, senha } = req.body
            const { salt, hashPassword } = hashearSenha(senha);
            const usuario = await db.Usuario.create({ 
                nome, 
                email, 
                senha: hashPassword,
                salt
            })

            return res.status(201).send(usuario);
        } catch(error) {
            return res.status(500).json({ message: "Erro ao realizar registro"});
        }
    }
}

module.exports = UsuarioController;