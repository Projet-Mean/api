const express = require('express');
const router = express.Router();
const reparationCtrl= require ('../controllers/ReparationsController');

router.post('api/repair', reparationCtrl.AjoutReparation);
router.get('/api/repair', reparationCtrl.FindReparation);
router.put('/api/repair/:id', reparationCtrl.UpdateReparation);
router.delete('/api/repair/:id', reparationCtrl.DeleteReparation);



module.exports = router;