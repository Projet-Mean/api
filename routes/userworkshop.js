const express = require('express');
const router = express.Router();

const userworshopCtrl = require('../controllers/userworkshopController');

router.post('/signup', userworshopCtrl.signup);
router.post('/login', userworshopCtrl.login);
router.post('/add', userworshopCtrl.AjoutUserWorkshop);
router.get('/userworshop', userworshopCtrl.getAllUserWorkshop);
router.get('/userworshop/:id', userworshopCtrl.getOneUserWorkshop);
router.put('/update-userworshop/:id', userworshopCtrl.UpdateUserWorkshop);
router.delete('/delete/:id', userworshopCtrl.DeleteUserWorkshop);
module.exports = router;