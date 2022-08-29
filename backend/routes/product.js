const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')

const productCtrl = require('../controllers/product')

router.get('/', auth, productCtrl.getAllSauces)
router.post('/', auth, multer, productCtrl.createSauce)
router.get('/:id', auth, productCtrl.getOneSauce)
router.put('/:id', auth, multer, productCtrl.modifySauce)
router.delete('/:id', auth, productCtrl.deleteSauce)
router.post('/:id/like', auth, productCtrl.likes)

module.exports = router;