//initial requirement
const express = require("express");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
const flash = require("connect-flash");
const passport = require("passport");
const session = require("express-session");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//mongoDB options
const options = { useNewUrlParser: true, useUnifiedTopology: true }
//port setting
const port = process.env.PORT || 3000;
// app for express
const app = express();


//Use following middlewares
//Helmet
app.use(helmet());
//express.json()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
//Express-session
app.use(
 session({
  secret: "secret",
  resave: true,
  saveUninitialized: true
 })
);
//Passport
app.use(passport.initialize());
app.use(passport.session());
//Flash
app.use(flash());
//Cor
app.use(cors());

//Hello World!
app.get('/', (req, res) => {
  res.send('Hello Worlds!');
 });

 // port listening
app.listen(port, () => console.log(`OK, Server started on port ${port}`));

