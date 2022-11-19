const router = require("express").Router();
const {update, deleteUser} = require("../controllers/userController");
const {authMiddleware} = require('../middlewares/authMiddlewares');
const {joi, Segments} = require("celebrate");
router.use(authMiddleware);

router.post('/update', update);
router.post('/delete', deleteUser);

module.exports = router;