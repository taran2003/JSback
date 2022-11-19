const jwt = require('../helper/jwt')
const {AuthError} = require('../errors/authErrors')

const accessTokenKey = process.env.JWT_ACCESS_KEY;

const tokenCheck = (req, res, next) => {
    try {
        const {accessToken, refreshToken} = req.headers['Authorization'];
        const {id} = jwt.verifyToken(accessToken, accessTokenKey);
        req.body.userId = id;
        next();
    } catch (e) {
        res.status(401).send("AccessToken is not valid");
    }
}

function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
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

