const express = require('express');
const app = express();
const mongoose = require('mongoose');

const userclientsRoutes = require('./routes/userclientsRoute');
const voitureRoute = require('./routes/voituresRoute');

mongoose.connect('mongodb+srv://Baovola:baovola0@bdmecano.hgc1u8o.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res) => {
   res.json({ message: 'Votre requête a bien été reçue !' }); 
});
//enregistrement route authentification
app.use('/api/auth', userclientsRoutes);
// app.use('/voitures/',voitureRoute);

module.exports = app;