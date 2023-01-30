const express = require('express');
const router = express.Router();
const voitureCtrl = require ("../controllers/voituresController")

router.post('/add',voitureCtrl.AjoutVoiture);
router.get('/car/:id', voitureCtrl.getOneVoiture);
router.get('/car', voitureCtrl.getAllVoiture);
router.put('/car/:id', voitureCtrl.UpdateVoiture);
router.delete('/delete/:id',voitureCtrl.DeleteAllVoiture);
module.exports = router;