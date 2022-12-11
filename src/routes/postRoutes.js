const router = require("express").Router();
const {add, getPost, deletePost,getAll} = require("../controllers/postController.js");
const {celebrate} = require("celebrate")
const {errorHandler, tokenCheck} = require('../middlewares/authMiddlewares')
const schemes = require('../validation/postSchemas')
const fileMiddleware = require('../middlewares/saveImgMiddleware');

router.use(tokenCheck);

router.post('/add', fileMiddleware.single('image'), add);
router.post('/get', getPost);
router.post('/getALL', getAll);
router.post('/delete', deletePost);

router.use(errorHandler);

module.exports = router;