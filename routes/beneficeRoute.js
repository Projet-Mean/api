const express = require('express');
const router = express.Router();
const beneficeCtrl = require ("../controllers/beneficeController")

router.post('/add',beneficeCtrl.AjoutBenefice);
router.get('/depense/:id', beneficeCtrl.getOneBenefice);
router.get('/depense',beneficeCtrl.getAllBenefice);
router.put('/depense/:id',beneficeCtrl.UpdateBenefice);
router.delete('/depense/:id',beneficeCtrl.DeleteOneBenefice);
module.exports = router;