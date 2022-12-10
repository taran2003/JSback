const jwt = require('../helper/jwt')
const {AuthError} = require('../errors/authErrors')
const error = require("../constants/errorsConstants")

const accessTokenKey = process.env.JWT_ACCESS_KEY;

const tokenCheck = (req, res, next) => {
    try {
        const accessString = req.headers.authorization;
        const accessToken =  accessString.substring('Bearer '.length);
        const {id} = jwt.verifyToken(accessToken, accessTokenKey);
        req.body.accessToken = accessToken;
        next();
    } catch (e) {
        res.status(error.errorsStatus.Unauthorized).send(error.errorsMessages.Unauthorized);
    }
}

function errorHandler(err, req, res, next) {
    if (!(err instanceof AuthError)) {
        next(err);
        return;
    }
    console.log(err);
    res.status(err.status)
    res.send(err.message)
}

module.exports = {
    tokenCheck,
    errorHandler
}

