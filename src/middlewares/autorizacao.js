const jwt = require('jsonwebtoken');
require('dotenv').config();

async function createJwt(email, password) {
    const token = await jwt.sign({ email, password }, process.env.CHAVE_SECRETA, {expiresIn: 604800})
    return token;
}

module.exports = { createJwt }

