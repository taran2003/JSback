const repositories = require('../repositories/commentRepositories');
const { verifyToken } = require('../helper/jwt');
const { getById } = require('../repositories/userRepositories');

const accessTokenKey = process.env.JWT_ACCESS_KEY;

const add = async ({ accessToken, postId, text }) => {
    try {
        const tokenId = verifyToken(accessToken, accessTokenKey);
        await repositories.create({ authorId: tokenId.id, postId, text })
    } catch (e) {
        throw(e);
    }
}

const getByPostId = async ({ postId }) => {
    try {
        const comments = await repositories.getByPostId({ postId })
        for (let i = 0; i < comments.length; i++) {
            let user = await getById({ id: comments[i].authorId })
            user = {
                firstName: user.firstName,
                lastName: user.lastName,
            }
            comments[i] = {
                ...comments[i],
                user
            }
        }
        return (comments);
    } catch (e) {
        throw(e);
    }
}

const deletePost = async ({ commentId }) => {
    try {
        await repositories.deletePost({ id: commentId });
    } catch (error) {
        throw(e)
    }
}

module.exports = {
    add,
    getByPostId,
    deletePost,
}