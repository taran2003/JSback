const multer = require('multer');
const repositories = require('../repositories/postRepositories');
const { verifyToken } = require('../helper/jwt');
const { getById } = require('../repositories/userRepositories');

const accessTokenKey = process.env.JWT_ACCESS_KEY;

const add = async ({ accessToken, uuid, file, text }) => {
    try {
        const imgSours = uuid + '_' + file.originalname;
        const tokenId = verifyToken(accessToken, accessTokenKey);
        const user = await getById({ id: tokenId.id });
        await repositories.create({ user, imgSours, text })
    } catch (error) {
        throw(error);
    }
}

const getUserPost = async ({ accessToken }) => {
    try{
        const tokenId = verifyToken(accessToken, accessTokenKey);
        let user = await getById({ id: tokenId.id });
        const posts = await repositories.getByUserId({ user });
        user = {
            firstName: user.firstName,
            lastName: user.lastName,
        }
        const data = {
            user,
            posts
        }
        return (data);
    } catch(e){
        throw e;
    }
}

const getPost = async ({id}) =>{
    try{
        const post = await repositories.getById({ id });
        let user = await getById({ id: post.authorId });
        user = {
            firstName: user.firstName,
            lastName: user.lastName,
        }
        const data = {
            user,
            post
        }
        return (data);
    } catch(e){
        throw e;
    }
}

const getAll = async () => {
    try {        
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
    } catch (error) {
        throw (error)
    }
}

const deletePost = async ({ postId }) => {
    try {        
        await repositories.deletePost({ id: postId });
    } catch (error) {
        throw error;
    }
}

module.exports = {
    add,
    getUserPost,
    getPost,
    getAll,
    deletePost,
}