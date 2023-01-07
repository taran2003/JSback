const {Joi, Segments} = require("celebrate")

const getPost = {
    [Segments.BODY]: Joi.object({
        accessToken: Joi.string().required(),
        id: Joi.number().integer(),
        refreshToken: Joi.string().required()
    })
}

const deletePost = {
    [Segments.BODY]: Joi.object({
        accessToken: Joi.string().required(),
        refreshToken: Joi.string().required(),
        postId: Joi.number().integer().required()
    })
}

const add = {
    [Segments.BODY]: Joi.object({
        accessToken: Joi.string().required(),
        text: Joi.string().required(),
        uuid: Joi.string().required(),
        refreshToken: Joi.string().required()
    })
}

module.exports = {
    add,
    deletePost,
    getPost
}