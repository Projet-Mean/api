const express = require('express');
const router = express.Router();
const depenseCtrl = require ("../controllers/depenseController")

router.post('/add',depenseCtrl.AjoutDepense);
router.get('/depense/:id', depenseCtrl.getOneDepense);
router.get('/depense',depenseCtrl.getAllDepense);
router.put('/depense/:id',depenseCtrl.UpdateDepense);
router.delete('/depense/:id',depenseCtrl.DeleteOneDepense);
module.exports = router;