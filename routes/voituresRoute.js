const express = require('express');
const router = express.Router();
const voitureCtrl = require ("../controllers/voituresController")

router.post('/add',voitureCtrl.AjoutVoiture);
router.get('/car/:id', voitureCtrl.getOneVoiture);
router.get('/cars', voitureCtrl.getAllVoiture);
router.get('/carsAt', voitureCtrl.getAllVoitureAt);
router.put('/car/:id', voitureCtrl.UpdateVoiture);
router.delete('/delete/:id',voitureCtrl.DeleteAllVoiture);
module.exports = router;
