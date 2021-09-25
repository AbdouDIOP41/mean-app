const express = require('express');
const mongoose = require('mongoose');



const app = express();

mongoose.connect('mongodb+srv://root:root@cluster0.i57dh.mongodb.net/mean-app-db?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !')
);

app.use((req, res) => {
   res.json({ message: 'Votre requête a bien été reçue !' }); 
});

module.exports = app;