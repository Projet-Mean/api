const express = require('express');
const router = express.Router();
const factureCtrl = require ("../controllers/factureController")

router.post('/add',factureCtrl.AjoutFacture);
router.get('/facture/:id', factureCtrl.getOneFacture);
router.get('/facture',factureCtrl.getAllFacture);
router.put('/facture/:id',factureCtrl.UpdateFacture);
router.delete('/facture/:id',factureCtrl.DeleteOneFacture);
module.exports = router;