const jwt = require('jsonwebtoken')

const autheticate = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, 'secretValue')
        req.user = decode
        next()
    } catch(error) {
        res.json({
            message: "Not Authorized"
        })
    }
}

module.exports = autheticate