//dependenceies
const express = require('express');
const path = require('path');


//instantiations
const app = express();
const port = 3000;


//configurations

//set view engine to pug
app.set("view engine", "pug");// specify the view engine
app.set("views", path.join(__dirname, "views"));//specify the views directory

//import routes
const studyRoutes = require('./routes/studyRoutes');


//set the views path
app.set('views', path.join(__dirname, 'views'));

//middleware

app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log('A new request received at ' + Date.now());
  next();
});
//Simple request time logger for a specific route
app.use('/about', (req, res, next) => {
  console.log('A new request received at ' + Date.now());
  next();
  });
   
  //routes
  //use imported routes
  app.use('/',studyRoutes)
app.get("*", (req, res) => {
  res.send("error! page does not exist");
});

//bootstraping a server
app.listen(3000, () => console.log('listening on port 3000')); // new