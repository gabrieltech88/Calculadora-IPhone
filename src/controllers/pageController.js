const path = require('path')

class PageController {
    static async getIndex(req, res) {
        res.sendFile(path.join(__dirname, '../../public/pages', 'calculadora.html'));
    }

    static async getSignup(req, res) {
        res.sendFile(path.join(__dirname, '../../public/pages', 'cadastro.html'));
    }

    static async getLogin(req, res) {
        res.sendFile(path.join(__dirname, '../../public/pages', 'index.html'));
    }
}

module.exports = PageController