const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Load Input Validation

const validateRegister = require("../../validation/register");

module.exports = app => {
  // @route   GET api/auth/test
  // @desc    Tests auth route
  // @access  Public
  app.get("/auth/test", (req, res) => {
    res.json({
      message: "Wokring Properly"
    });
  });

  // @route   POST api/auth/register
  // @desc    Register user
  // @access  Public
  app.post("/auth/register", (req, res) => {
    const { errors, isValid } = validateRegister(req.body);

    // CHECK VAlidation
    if (!isValid) {
      res.status(400).json(errors);
    }

    User.findOne({ username: req.body.username }).then(user => {
      if (user) {
        errors.username = "username already exits";
        return res.status(400).json(errors);
      } else {
        const newUser = new User({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          image: req.body.image,
          password: req.body.password,
          email: req.body.email,
          username: req.body.username
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });

  // @route   POST api/auth/login
  // @desc    Login User
  // @access  Public
  app.post("/auth/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Find user by username
    User.findOne({ username }).then(user => {
      // Check for user
      if (!user) {
        return res.status(404).json({ username: "User doesn't exists" });
      }
      // Check Password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // Generate the token
          const payload = {
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            image: user.image
          };

          jwt.sign(
            payload,
            process.env.SECRET,
            { expiresIn: 3600 },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          // Password doesn't match
          return res
            .status(400)
            .json({ password: "The password is incorrect" });
        }
      });
    });
  });
};
