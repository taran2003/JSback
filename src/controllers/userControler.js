const userServices = require("../services/userServices");

const update = async (req, res) => {
    const {id, accessToken, newFirstName, newLastName} = req.body;
    await userServices.rewriteUser({id, accessToken, newFirstName, newLastName});
    res.send("successes");
};

const deleteUser = async (req, res) => {
    const {id, accessToken, refreshToken, newLogin, newPassword} = req.body;
    try {
        userServices.checkAccess({id, accessToken, refreshToken, newLogin, newPassword});
    } catch (e) {
        throw e;
    }
    await userServices.deleteUser(login);
    res.send("successes");
}

module.exports = {
    update,
    deleteUser
}