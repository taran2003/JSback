const multer = require('multer')
const { v4: uuidv4 } = require('uuid');

const types = ['/image/png', 'image/jpeg', 'image/jpg'];

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'image/');
    },
    filename: function (req, file, cb) {
        const uuid = uuidv4();
        cb(null, uuid + '_' + file.originalname);
        req.body.uuid = uuid;
    }
});

const fileFilter = (req, file, cb) => {
    if (types.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

module.exports = multer({ storage, fileFilter })