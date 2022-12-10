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

//todo сортировка по дате
const getPost = async ({ accessToken }) => {
    const tokenId = verifyToken(accessToken, accessTokenKey);
    const user = await getById({ id: tokenId.id });
    return (await repositories.getByUserId({ user }));
}

const deletePost = async ({postId}) => {
    await repositories.deletePost({id:postId});
}

module.exports = {
    add,
    getPost,
    deletePost,
}