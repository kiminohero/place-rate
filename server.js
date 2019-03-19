const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
  res.json({
    meessage: 'Working'
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App started at ${PORT}`));
