const multer = require('multer');
const { verifyToken } = require('../helper/jwt');
const { getById } = require('../repositories/userRepositories');
const services = require('../services/postServices');

const add = async (req, res) => {
    const { accessToken, text, uuid } = req.body;
    const { file } = req;
    try {
        await services.add({ accessToken, uuid, file, text })
    } catch (error) {
        next(error)
    }
    res.send("success");
}

const getUserPost = async (req, res) => {
    const { accessToken } = req.body;
    try {
        res.send(await services.getUserPost({ accessToken }));
    } catch (error) {
        next (error)
    }
}

const getPost = async (req,res) => {
    const {id} = req.body;
    try {
        res.send(await services.getPost({id}))
    } catch (error) {
        next(error);
    }
}

const getAll = async (req, res) => {
    try {
        res.send(await services.getAll());
    } catch (error) {
        next(error);
    }
}

const deletePost = async (req,res) => {
    const {postId} = req.body;
    try {
        await services.deletePost({postId});
    } catch (error) {
        next (error)
    }
    res.send('success');
}


module.exports = {
    add,
    getUserPost,
    getPost,
    getAll,
    deletePost
}