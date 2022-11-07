const router = require("express").Router();
const {login,refresh,register} = require("../controllers/authController")
router.post('/login',login);
router.post('/refresh',refresh);
router.post('/register',register);

module.exports = router;