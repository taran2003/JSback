const {errorsMessages,errorsNames} = require('../constants/errorsConstants')

class AccessError extends Error
{
    constructor() {
        super(errorsMessages.accessError);
        this.name = errorsNames.accessError;
    }
}

module.exports = {

}