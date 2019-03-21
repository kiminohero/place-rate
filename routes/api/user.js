const passport = require('passport');
module.exports = app => {
  // @route   GET api/auth/curr_user
  // @desc    Get the current_user details
  // @access  Private
  app.get(
    '/user/curr_user',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      res.json({
        id: req.user.id,
        firstname: req.user.firstname,
        email: req.user.email,
        lastname: req.user.lastname,
        username: req.user.username,
        photo: req.user.photo
      });
    }
  );
};
