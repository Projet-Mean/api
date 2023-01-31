const express = require('express');
const router = express.Router();
const reparationCtrl= require ('../controllers/ReparationsController');

router.post('/api/add', reparationCtrl.AjoutReparation);
router.get('/api/repair', reparationCtrl.getAllRepare);
router.get('/api/bymatr/:id', reparationCtrl.getbyMatricule);
router.get('/api/byid/:id', reparationCtrl.getbyid);
router.put('/api/repair/:id', reparationCtrl.UpdateReparation);
//router.delete('/api/repair/:id', reparationCtrl.DeleteOneReparation);

module.exports = router;
