const express = require('express');
const router = express.Router();
const voitureCtrl = require ("../controllers/voituresController")

router.post('/add',voitureCtrl.AjoutVoiture);
router.get('/car/:id', voitureCtrl.getOneVoiture);
router.get('/carsbycli/:id', voitureCtrl.getVoiturebycli);
router.get('/cars', voitureCtrl.getAllVoiture);
router.get('/carsAt', voitureCtrl.getAllVoitureAt);
router.get('/carsMine/:id',  voitureCtrl.getAllVoitureMine);
router.put('/car/:id', voitureCtrl.UpdateVoiture);
router.delete('/delete/:id',voitureCtrl.DeleteAllVoiture);
router.get('/sorties',voitureCtrl.sortie);
module.exports = router;
