const router = require("express").Router();
const {errorHandler} = require('../middlewares/errorHandler');
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");

router.use('/auth',authRoutes);
router.use('/user',userRoutes);
router.use('/post',postRoutes);
router.use(errorHandler);

module.exports = router;