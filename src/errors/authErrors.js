const {errorsMessages, errorsNames, errorsStatus} = require('../constants/errorsConstants')

class AuthError extends Error {
    status;

    constructor(message,name, status) {
        super(message);
        this.name = name;
        this.status = status;
    }
}

class UserNotFoundError extends AuthError {
    constructor() {
        super(errorsMessages.userNotFound,errorsNames.userNotFound,errorsStatus.userNotFound);
    }
}

class InvalidPasswordError extends AuthError {
    constructor() {
        super(errorsMessages.invalidPassword,errorsNames.invalidPassword,errorsStatus.conflict);
    }
}

class InvalidLoginError extends AuthError {
    constructor() {
        super(errorsMessages.invalidLogin,errorsNames.invalidLogin,errorsStatus.conflict);
    }
}


module.exports = {
    UserNotFoundError,
    InvalidPasswordError,
    InvalidLoginError,
    AuthError
}
