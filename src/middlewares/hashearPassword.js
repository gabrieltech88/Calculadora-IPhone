const { scryptSync, randomBytes } = require('crypto'); 


function hashearSenha(password) {
    const salt = randomBytes(16).toString('hex');
    
    const hashPassword = scryptSync(password, salt, 64).toString('hex');

    return hashPassword;
}

module.exports = hashearSenha;