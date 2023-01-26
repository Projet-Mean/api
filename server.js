
const http = require('http');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require ("body-parser");

const userclientsRoutes = require('./routes/userclientsRoute');
const reparationRoutes = require("./routes/reparationsRoute");

normalizePort = (val) =>{
  const port = parseInt(val, 10);
  if(isNaN(port)){
      return val;
  }
  if(port >= 10){
      return port;
  }
  return false;
}
mongoose.set('strictQuery',false);
mongoose.connect('mongodb+srv://Baovola:baovola0@bdmecano.hgc1u8o.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true 
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  
app.get('/',(req,res)=>{
  res.send('le serveur est la')
})

app.use(bodyParser.json())
//enregistrement route authentification
app.use('/auth/user',require('./routes/userclientsRoute'));
app.use('/api',require('./routes/userclientsRoute'));
app.use('/api',require('./routes/reparationsRoute'));
app.use('/api',require('./routes/voituresRoute'));
app.use('/auth/userfinancial',require('./routes/userfinancial'));
app.use('/auth/userworkshop',require('./routes/userworkshop'));
app.use('/api/depense',require('./routes/depenseRoute'));
app.use('/api/benefice',require('./routes/beneficeRoute'));
app.use('/api/entree',require('./routes/entreeRoute'));

// error handler
app.use((err, req, res, next) => {
  if (err.name === 'ValidationError') {
      var valErrors = [];
      Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
      res.status(422).send(valErrors)
  }
});






const port = normalizePort(process.env.PORT || "3000");
app.set('port', port);
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`); 
})