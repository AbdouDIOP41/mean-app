
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://" + process.env.DB_USER + ':' + process.env.DB_PASS + "@cluster0.i57dh.mongodb.net/mean-app-db?retryWrites=true&w=majority",
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreatIndex: true,
    //useFindAndModify: false
})
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((err) => console.log('Connexion à MongoDB échouée !', err));
