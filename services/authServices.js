const {createToken} = require("../helper/jwt");
require('dotenv').config();

const refreshTokenKey = process.env.JWT_REFRESH_KEY;
const accessTokenKey = process.env.JWT_ACCESS_KEY;

const login = ({login, password})=>{
    const accessToken = createToken({},accessTokenKey);
    const refreshToken = createToken({},refreshTokenKey);
    return({accessToken,refreshToken});
};

module.exports={
    login
}