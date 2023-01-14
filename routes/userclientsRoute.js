const express = require('express');
const router = express.Router();

const userclientsCtrl = require('../controllers/userclientsController');

router.post('/signup', userclientsCtrl.signup);
router.post('/login', userclientsCtrl.login);

module.exports = router;