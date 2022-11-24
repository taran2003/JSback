const {Joi, Segments} = require("celebrate")

const update = {
    [Segments.BODY]: Joi.object({
        id: Joi.number().integer(),
        accessToken: Joi.string().required(),
        refreshToken: Joi.string().required(),
        login: Joi.string().default(null),
        password: Joi.string().default(null),
        firstName: Joi.string().default(null),
        lastName: Joi.string().default(null),
    })
}

const deleteUser = {
    [Segments.BODY]: Joi.object({
        accessToken: Joi.string().required(),
        refreshToken: Joi.string().required(),
        id: Joi.number().integer().required(),
        login: Joi.string().required()
    })
}

const getUser = {
    [Segments.BODY]: Joi.object({
        accessToken: Joi.string().required(),
        login: Joi.string().required()
    })
}

module.exports = {
    update,
    deleteUser,
    getUser
}