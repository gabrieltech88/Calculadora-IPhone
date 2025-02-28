const cookieParser = require('cookie-parser');
const { verify, decode } = require('jsonwebtoken');
require('dotenv').config();

module.exports = async(req, res, next) => {
    const accessToken = req.cookies.token
    console.log(accessToken)
    
    if(!accessToken) {
        return res.status(401).send("Access token não informado")
    }

    try {
        verify(accessToken, process.env.CHAVE_SECRETA)
        return next()

    } catch(err) {
        res.status(401).send('usuário não autorizado')
    }
}