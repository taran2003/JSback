const router = require("express").Router();
const {add, deletePost, getByPostId} = require("../controllers/commentController");
const {celebrate} = require("celebrate")
const {errorHandler, tokenCheck} = require('../middlewares/authMiddlewares')
const schemes = require('../validation/postSchemas')

router.use(tokenCheck);

router.post('/add', add);
router.post('/get', getByPostId);
router.post('/delete', deletePost);

router.use(errorHandler);

module.exports = router;