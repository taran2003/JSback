const router = require("express").Router();
const {errorHandler} = require('../middlewares/errorHandler');
const authRoutes = require("./authRoutes");
//const userRoutes = require("./userRoutes")

router.use('/auth',authRoutes);
router.use(errorHandler);

module.exports = router;