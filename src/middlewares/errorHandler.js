const {TokenExpiredError} = require("jsonwebtoken");
const error = require('../constants/errorsConstants')

function errorHandler (err, req, res, next)  {
    // if (res.headersSent) {
    //     return next(err);
    // }
    if(err instanceof TokenExpiredError)
    {
        res.sendStatus(error.errorsStatus.Unauthorized);
        res.send(error.errorsMessages.Unauthorized)
        return;
    }
    res.sendStatus(500);
    console.log(err);
}

module.exports = {
    errorHandler
}