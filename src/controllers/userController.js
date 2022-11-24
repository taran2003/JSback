const userServices = require("../services/userServices");
const {AccessError} = require("../errors/authErrors")
const {verifyToken} = require('../helper/jwt');
const userRepositories = require('../repositories/userRepositories');

const update = async (req, res, next) => {
    const {id, accessToken, login, password, firstName, lastName} = req.body;
    try {
        console.log(firstName)
        await userServices.rewriteUser({id, accessToken, login, password, firstName, lastName});
        res.send("successes");
    } catch (e) {
        next(e);
        return;
    }
};

const deleteUser = async (req, res, next) => {
    const {id, accessToken, refreshToken, login} = req.body;
    try {
        await userServices.deleteUser({id, login, accessToken});
        res.send("successes");
    } catch (e) {
        next(e);
        return;
    }
}

const getUser = async (req, res, next) => {
    const {login} = req.body;
    try{
        res.send(await userServices.getUser({login}));
    } catch (e) {
        next(e)
        return;
    }
}

module.exports = {
    update,
    deleteUser,
    getUser
}