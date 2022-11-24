const router = require("express").Router();
const {update, deleteUser, getUser} = require("../controllers/userController");
const {tokenCheck} = require('../middlewares/authMiddlewares');
const {celebrate} = require("celebrate");
const {errorHandler} = require('../middlewares/authMiddlewares')
const schemes = require("../validation/userSchemas");

router.use(tokenCheck);
router.post('/update', celebrate(schemes.update), update);
router.post('/delete', celebrate(schemes.deleteUser), deleteUser);
router.post('/delete', celebrate(schemes.getUser), getUser);

router.use(errorHandler);

module.exports = router;