const express = require('express');
const router = express.Router();
const reparationCtrl= require ('../controllers/ReparationsController');

router.post('/api/repair', reparationCtrl.AjoutReparation);
router.get('/api/repair/:id', reparationCtrl.getOneRepare);
router.get('/api/repair', reparationCtrl.getAllRepare);
router.put('/api/repair/:id', reparationCtrl.UpdateReparation);
router.delete('/api/repair/:id', reparationCtrl.DeleteOneReparation);



module.exports = router;