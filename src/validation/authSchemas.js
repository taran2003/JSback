const {Joi, Segments} = require("celebrate")

const login = {
    [Segments.BODY]: Joi.object({
        login: Joi.string().required(),
        password: Joi.string().required()
    })
}

const refresh = {
    [Segments.BODY]: Joi.object({
        accessToken: Joi.string().required(),
        refreshToken: Joi.string().required()
    })
}

const register = {
    [Segments.BODY]: Joi.object({
        login: Joi.string().required(),
        password: Joi.string().required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required()
    })
}

module.exports = {
    login,
    refresh,
    register
}