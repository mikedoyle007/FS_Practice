// require necessary imports
const express = require('express');
const parser = require('body-parser');

const app = express();
const PORT = 3000;

// middleware
app.use(parser.urlencoded({ extended: true }));



// have express instance listen in on a PORT
app.listen(PORT, (err) => {
  if (err) {
    console.log('there was an error in the server');
  } else {
    console.log('successfull - server');
  }
})