// How can you design an A/B testing module using Redis that efficiently distributes three layouts 
// (namely layout1, layout2, and layout3) equally among users? The solution should cater to guest users for 
// whom we don't have any pre-existing identifiers. The goal is to implement an API that serves these layouts uniformly.

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
const dbConnection = require("./src/db");
const PORT = process.env.PORT || 3001;
const passport = require('passport');

async function connectDb(){
  await dbConnection();
}

connectDb();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(passport.initialize());

app.use("*",(req,res,next)=>{
  next();
})

require("./src/route")(app);

app.listen(PORT, ()=> {
  console.log(`Listening to ${PORT}`);
});