const express = require('express');
const path = requier('path');
const bodyParser = require('body-parser');
const app = express();

const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'public')));


const mongo_uri = 'mongodb://dev:dev@localhost/todos';

mongoose.connect(mongo_uri, function(err){
  if(err){
    throw err;
  }else{
    console.log(`Succesfully connected to ${mongo_uri}`)
  }
});

app.get('/', (req, res) =>{

});
app.listen(3000, () => {
  console.log('server started');
})
module.exports = app;
