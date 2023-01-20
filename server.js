
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
app.use('/auth',require('./routes/userclientsRoute'));
app.use('/api',require('./routes/userclientsRoute'));
app.use('/api',require('./routes/reparationsRoute'));
app.use('/api',require('./routes/voituresRoute'));







const port = normalizePort(process.env.PORT || "3000");
app.set('port', port);
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`); 
})