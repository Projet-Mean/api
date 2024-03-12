
const http = require('http');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require ("body-parser");
const cors = require('cors')

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

app.use(cors());
mongoose.set('strictQuery',false);
mongoose.connect('mongodb+srv://assigmentapp:assigmentapp123@cluster0.slrjbpl.mongodb.net/assignments?retryWrites=true&w=majority&appName=Cluster0',

{ useNewUrlParser: true,
    useUnifiedTopology: true 
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  
app.get('/',(req,res)=>{
  res.send('le serveur est actif')
})
app.use(express.json())
app.use(bodyParser.json())

app.use('/api/etu/', require('./routes/etudiants.routes'));

// error handler
app.use((err, req, res, next) => {
  if (err.name === 'ValidationError') {
      var valErrors = [];
      Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
      res.status(422).send(valErrors)
  }
});

const port = normalizePort(process.env.PORT || "8010");
app.set('port', port);
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`); 
})
