const multer = require('multer');
const { verifyToken } = require('../helper/jwt');
const { getById } = require('../repositories/userRepositories');
const services = require('../services/postServices');


const add = async (req, res) => {
    const { accessToken, text, uuid } = req.body;
    const { file } = req;
    await services.add({ accessToken, uuid, file, text })
    res.send("success");
}

const getPost = async (req, res) => {
    const { accessToken } = req.body;
    res.send(await services.getPost({ accessToken }));
}

const deletePost = async (req,res) => {
    const {postId} = req.body;
    await services.deletePost({postId});
    res.send('success');
}


module.exports = {
    add,
    getPost,
    deletePost
}