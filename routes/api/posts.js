const passport = require('passport');
const Post = require('../../models/Posts');
const User = require('../../models/User');

module.exports = app => {
  // @route   GET /posts/test
  // @desc    Tests post route
  // @access  Public
  app.get('/posts/test', (req, res) => {
    res.json({
      message: 'Wokring Properly'
    });
  });

  // @route   GET /posts
  // @desc    Get Posts
  // @access  Public
  app.get('/posts', (req, res) => {
    Post.find()
      .sort({ date: -1 })
      .then(posts => res.json(posts))
      .catch(err => res.status(404).json({ message: 'No Posts Found' }));
  });

  // @route   GET /post/:id
  // @desc    Get Post by id
  // @access  Public
  app.get('/post/:id', (req, res) => {
    Post.findById(req.params.id)
      .then(post => res.json(post))
      .catch(err => res.status(404).json({ message: 'No Post Found' }));
  });

  // @route   POST /posts
  // @desc    Create a new post
  // @access  Private
  app.post(
    '/posts',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const newPost = new Post({
        title: req.body.title,
        content: req.body.content,
        rating: req.body.rating,
        image: req.body.image,
        user: req.user.id
      });
      newPost
        .save()
        .then(post => res.json(post))
        .catch(err => console.log(err));
    }
  );

  // @route   POST /post/like/:id
  // @desc    Like a post
  // @access  Private
  app.post(
    '/post/like/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      User.findOne({ user: req.user.id }).then(user => {
        Post.findById(req.params.id)
          .then(post => {
            if (
              post.likes.filter(like => like.user.toString() === req.user.id)
                .length > 0
            ) {
              return res.status(400).json({
                message: 'Already Liked this post'
              });
            }
            post.likes.unshift({ user: req.user.id });
            post.save().then(post => res.json(post));
          })
          .catch(err =>
            res.status(404).json({
              message: 'No posts found'
            })
          );
      });
    }
  );

  // @route   POST /post/unlike/:id
  // @desc    Unlike a post
  // @access  Private
  app.post(
    '/post/unlike/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      User.findOne({ user: req.user.id }).then(user => {
        Post.findById(req.params.id)
          .then(post => {
            if (
              post.likes.filter(like => like.user.toString() === req.user.id)
                .length === 0
            ) {
              return res.status(400).json({
                message: 'You have not yet liked this post'
              });
            }

            const removeIndex = post.likes.map(item =>
              item.user.toString().indexOf(req.user.id)
            );

            post.likes.splice(removeIndex, 1);

            post.save().then(post => res.json(post));
          })
          .catch(err =>
            res.status(404).json({
              message: 'No posts found'
            })
          );
      });
    }
  );

  // @route   DELETE /posts
  // @desc    Delete a Post by id
  // @access  Private
  app.delete(
    '/post/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      User.findOne({ user: req.user.id }).then(user => {
        Post.findById(req.params.id)
          .then(post => {
            if (post.user.toString() !== req.user.id) {
              return res.status(401).json({
                message: 'User Not Authorized'
              });
            }
            post
              .remove()
              .then(() =>
                res.json({
                  message: 'Post deleted'
                })
              )
              .catch(err =>
                res.status(404).json({
                  message: 'Post Not Found'
                })
              );
          })
          .catch(err =>
            res.status(404).json({
              message: 'No posts found'
            })
          );
      });
    }
  );
};
