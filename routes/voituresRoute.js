const express = require('express');
const router = express.Router();
const voitureCtrl = require ("../controllers/voituresController")

router.post('/add',voitureCtrl.AjoutVoiture);
router.get('/car/:id', voitureCtrl.getOneVoiture);
<<<<<<< HEAD
router.get('/car', voitureCtrl.getAllVoiture);
=======
router.get('/cars', voitureCtrl.getAllVoiture);
router.get('/carsAt', voitureCtrl.getAllVoitureAt);
router.get('/carsMine/:id',  voitureCtrl.getAllVoitureMine);
>>>>>>> ff921146ed4374c78d2e72cb8b3be2e2c9aa9839
router.put('/car/:id', voitureCtrl.UpdateVoiture);
router.delete('/delete/:id',voitureCtrl.DeleteAllVoiture);
module.exports = router;
