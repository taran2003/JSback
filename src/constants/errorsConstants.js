const errorsMessages = {
    userNotFound : "user not found",
    invalidPassword : "invalid password",
    invalidLogin : "user with this name already exists",
    accessError : "Error denied",
    Unauthorized:"Unauthorized"
}

const errorsNames = {
    userNotFound : "userNotFound",
    invalidPassword : "invalidPassword",
    invalidLogin : "invalidLogin",
    accessError: "accessError",
    Unauthorized:"Unauthorized"
}

const errorsStatus = {
    conflict:409,
    userNotFound:200,
    Unauthorized:401
}

module.exports = {
    errorsNames,
    errorsMessages,
    errorsStatus
}