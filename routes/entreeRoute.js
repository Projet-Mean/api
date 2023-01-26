const express = require('express');
const router = express.Router();
const entreeCtrl = require ("../controllers/entreeController")

router.post('/add',entreeCtrl.AjoutEntree);
router.get('/depense/:id',entreeCtrl.getOneEntree);
router.get('/depense',entreeCtrl.getAllEntree);
router.put('/depense/:id',entreeCtrl.UpdateEntree);
router.delete('/depense/:id',entreeCtrl.DeleteOneEntree);
module.exports = router;