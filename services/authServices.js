const {createToken} = require("../helper/jwt");
const {verifyToken} = require("../helper/jwt");
require('dotenv').config();

const refreshTokenKey = process.env.JWT_REFRESH_KEY;
const accessTokenKey = process.env.JWT_ACCESS_KEY;

const login = ({id}) => {
    const accessToken = createToken({id},accessTokenKey);
    const refreshToken = createToken({id},refreshTokenKey);
    return({accessToken,refreshToken});
};

const parseId = ({accessToken,refreshToken}) => {
    const id = verifyToken(accessToken,accessTokenKey);
    return id.id;
}

const confirmPassword = (password,user) => {
   return user.password === password;
}

const confirmId = (userByLogin,userById) => {
    return userById.id === userByLogin.id
}

module.exports={
    parseId,
    confirmPassword,
    confirmId,
    login
}