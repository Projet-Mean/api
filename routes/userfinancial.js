const express = require('express');
const router = express.Router();

const userfinancialCtrl = require('../controllers/userfinancialController');

router.post('/signup', userfinancialCtrl.signup);
router.post('/login', userfinancialCtrl.login);
router.post('/add', userfinancialCtrl.AjoutUserfinancial);
router.get('/userfinancial', userfinancialCtrl.getAllUserfinancial);
router.get('/userfinancial/:id', userfinancialCtrl.getOneUserfinancial);
router.put('/update-userfinancial/:id', userfinancialCtrl.UpdateUserfinancial);
router.delete('/delete/:id', userfinancialCtrl.DeleteUserfinancial);
module.exports = router;