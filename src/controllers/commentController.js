const services = require('../services/commentServices');


const add = async (req, res) => {
    const { accessToken, postId, text } = req.body;
    try {
        await services.add({ accessToken, postId, text })
    } catch (error) {
        next(e);
    }
    res.send("success");
}

const getByPostId = async (req, res) => {
    const {postId} = req;
    try{
    res.send(await services.getByPostId({postId}));
    } catch(e) {
        next(e);
    }
}

const deletePost = async (req,res) => {
    const {commentId} = req.body;
    try {        
        await services.deletePost({commentId});
    } catch (error) {
        next(e);   
    }
    res.send('success');
}


module.exports = {
    add,
    getByPostId,
    deletePost
}