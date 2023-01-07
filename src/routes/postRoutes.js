const router = require("express").Router();
const {add, getPost, deletePost,getAll,getUserPost} = require("../controllers/postController.js");
const {celebrate} = require("celebrate")
const {errorHandler, tokenCheck} = require('../middlewares/authMiddlewares')
const schemes = require('../validation/postSchemas')
const fileMiddleware = require('../middlewares/saveImgMiddleware');

router.use(tokenCheck);

router.post('/add', fileMiddleware.single('image'), celebrate(schemes.add), add);
router.post('/getUser', getUserPost);
router.post('/get', celebrate(schemes.getPost), getPost);
router.post('/getALL', getAll);
router.post('/delete', celebrate(schemes.deletePost), deletePost);

router.use(errorHandler);

module.exports = router;