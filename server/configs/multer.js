const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const location = path.join(__dirname,'../public/images')
    console.log(location);
    cb(null, location)
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`)
  }
});

const upload   = multer({ storage });
module.exports = upload;