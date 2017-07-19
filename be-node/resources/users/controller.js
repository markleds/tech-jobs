const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Require User model
const models =
require('../../models');

let controller = {};

controller.create = (req, res) => {
  models
  .User
  .create(req.body.user)
  .then((user) => {
    res
    .status(201)
    .json(user);
  })
  .catch((err) => {
    res
    .status(400)
    .json(err);
  });
}

controller.login = (req, res) => {
  models
  .User
  .findOne({
    where: {
      email: req.body.user.email
    }
  })
  .then((user) => {
    if (user) {
      //Convert Sequelize object to real JSON object
      user = user.toJSON();

      if (bcrypt.compareSync(req.body.user.password, user.password)) {
        user.password = null;
        user.email = null;
        const token = jwt.sign(user, process.env.SECRET_KEY, {
          expiresIn: '7d'
        });

        res
        .status(201)
        .json({token: token, user: user});
      } else {
        res
        .status(401)
        .json({error: 'Not authorized'});
      }
    } else {
      res
      .status(404)
      .json({error: 'User not found by that email'});
    }
  });
}

module.exports = controller;
