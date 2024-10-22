const express = require('express')
const multer = require('multer')
const {addBook, getBooks, updateBookQuantity } = require('../controllers/bookController')
const {protect} = require('../middlewares/authMiddleware')
const router = express.Router()

//multer
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb){
        cb(null, Date.now() + '_' + file.originalname);
    }
})

const upload = multer({storage})

router.post('/add', upload.single('image'),protect, addBook)
router.put('/updateqty', protect, updateBookQuantity)
router.get('/', getBooks)

module.exports = router;