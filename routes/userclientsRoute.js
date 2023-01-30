const express = require('express');
const router = express.Router();

const userclientsCtrl = require('../controllers/userclientsController');
// router.post('/register',userclientsCtrl.createUserctrl)
router.post('/signup', userclientsCtrl.signup);
router.post('/login', userclientsCtrl.login);
router.post('/add', userclientsCtrl.AjoutClient);
router.get('/custumer', userclientsCtrl.getAllUser);
router.get('/custumer/:id', userclientsCtrl.getOneUser);
router.put('/update-custumer/:id', userclientsCtrl.UpdateClient);
router.delete('/delete/:id', userclientsCtrl.DeleteClient);
module.exports = router;