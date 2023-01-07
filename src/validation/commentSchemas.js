const {Joi, Segments} = require("celebrate")

const getByPostId = {
    [Segments.BODY]: Joi.object({
        accessToken: Joi.string().required(),
        refreshToken: Joi.string().required(),
        postId: Joi.number().integer(),
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
        postId: Joi.number().integer(),
        refreshToken: Joi.string().required()
    })
}

module.exports = {
    add,
    deletePost,
    getByPostId
}