const express=require('express');
const router=express.Router();


//import models
const Crop = require('../models/crop');


//routes
router.get('/', (req, res) => { // new
  res.send('Homepage! Hello world.');
});

router.get('/about', (req, res) => { // new
  res.send('Jesus loves me');
});

router.get("/member", (req, res) => {
  res.send("These are member details");
});

router.post("/addmember", (req, res) => {
  res.send("You have added a member");
});

//e.g /pathparams
router.get("/students/:name", (req, res) => {
  res.send("This is list of students");
});

router.get("/persons", (req, res) => {
  res.send(
    "This is students of " + req.query.class + " from " + req.query.course + " class " + req.query.cohort);
});

router.get("/learners", (req, res) => {
  res.send(
    "This is a student from " + req.query.gender + "  and " + req.query.age);
});

//serving html files
//get route for a file in the same directory

router.get('/first', (req, res) => {
 res.render('index')
});

router.post("/first", (req, res) => {
  console.log(req.body);
  });


router.post('/register', (req, res) => {
  const newCrop = new Crop(req.body)
  newCrop.save()
  res.redirect("/")
})  

router.get('/quotes', (req, res) => {
  res.render('quotes');
});


router.get('/quotes', (req, res) => {
  res.send(__dirname + '/views/quotes.html');
});

router.post('/quotes', (req, res) => {
  console.log(req.body);
});



module.exports = router;
