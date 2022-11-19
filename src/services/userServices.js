const userRepositories = require("../repositories/userRepositories");
const {createToken,verifyToken} = require("../helper/jwt");


const checkAccess = ({id, accessToken, refreshToken, newLogin, newPassword}) => {

}

const rewriteUser = ({id, accessToken, newFirstName, newLastName}) => {

}

const deleteUser = (login) => {
    userRepositories.deleteUser(login)
}

module.exports = {
    checkAccess,
    rewriteUser,
    deleteUser
};