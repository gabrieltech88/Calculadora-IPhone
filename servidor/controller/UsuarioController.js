const db = require("../db/models");

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
}

module.exports = UsuarioController;