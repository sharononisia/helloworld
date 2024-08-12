//dependencies
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

require("dotenv").config();

//import models
const studyRoutes = require('./routes/studyRoutes');

//instantiations
const app = express();
const port = 3000;

//configuration
app.set("view engine", "pug");// specify the view engine
app.set("views", path.join(__dirname, "views"));//specify the views directory

// set db connection to mongoose
mongoose.connect(process.env.DATABASE_LOCAL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", err => {
    console.error(`Connection error: ${err.message}`);
  });

//import routes
// const studyRoutes = require('./routes/studyRoutes');


//middleware
app.use(express.static(path.join(__dirname, "public")));//specify a folder for static files
app.use(express.urlencoded({ extended: true })); // helps to parse data from forms
app.use(express.json());// helps to capture data in json format


//routes
//use imported routes
app.use('/', studyRoutes)
app.get("*", (req, res) => {
  res.send("error! page does not exist");
});

//bootstraping a server
app.listen(port, () => console.log(`listening on port ${port}`));
// app.listen(3000, () => console.log('listening on port 3000')); // new