const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')

const productCtrl = require('../controllers/product')

router.get('/', auth, productCtrl.getAllProducts)
router.post('/', auth, multer, productCtrl.createProduct)
router.get('/:id', auth, productCtrl.getOneProduct)
router.put('/:id', auth, multer, productCtrl.modifySauce)
router.delete('/:id', auth, productCtrl.deleteSauce)

module.exports = router;