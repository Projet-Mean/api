const authService = require('../services/etudiant.service');

async function login(req, res) {
  console.log("eto "+req.body.pseudo);
  res.status(200).send("eto "+req.body.pseudo);
  //await authenticate(req, res, next);
}
async function my_assignement_id(req, res) {
  await getAssignment(req, res, next);
}
async function my_assignement_all(req, res) {
  await getAssignments(req, res, next);
}
async function generateSampleData(req, res) {
  try {
    await authService.generateSampleData();
    res.status(200).send('Données générées avec succès');
  } catch (error) {
    res.status(500).send('Erreur lors de la génération des données : ' + error.message);
  }
}
module.exports = {
  login,
  generateSampleData,
  my_assignement_id,
  my_assignement_all
};