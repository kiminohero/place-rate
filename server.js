const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');

const app = express();

require('dotenv').config();

// body-parser configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// mongoDB Connection
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log('mongoDB connected!'))
  .catch(err => console.log(err));

// Passport Middleware
app.use(passport.initialize());

// Passport  Configuration
require('./config/passport')(passport);

app.get('/', (req, res) => {
  res.json({
    meessage: 'Working'
  });
});

require('./routes/api/auth')(app);
require('./routes/api/posts')(app);
require('./routes/api/user')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App started at ${PORT}`));
