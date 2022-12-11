const multer = require('multer');
const repositories = require('../repositories/postRepositories');
const { verifyToken } = require('../helper/jwt');
const { getById } = require('../repositories/userRepositories');

const accessTokenKey = process.env.JWT_ACCESS_KEY;

const add = async ({ accessToken, uuid, file, text }) => {
    const imgSours = uuid + '_' + file.originalname;
    const tokenId = verifyToken(accessToken, accessTokenKey);
    const user = await getById({ id: tokenId.id });
    await repositories.create({ user, imgSours, text })
}

const getPost = async ({ accessToken }) => {
    const tokenId = verifyToken(accessToken, accessTokenKey);
    const user = await getById({ id: tokenId.id });
    const posts = await repositories.getByUserId({ user });
    const data = {
        user,
        posts
    }
    return (data);
}

const getAll = async () => {
    const posts = await repositories.getAll()
    for (let i = 0; i < posts.length; i++) {
        let user = await getById({ id: posts[i].authorId })
        if (user.id === posts[i].authorId) {
            user = {
                firstName: user.firstName,
                lastName: user.lastName,
            }
            posts[i]={
                ...posts[i],
                user
            }
        }
    }
    return (posts);
}

const deletePost = async ({ postId }) => {
    await repositories.deletePost({ id: postId });
}

module.exports = {
    add,
    getPost,
    getAll,
    deletePost,
}