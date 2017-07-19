const router = require('express').Router();

const controller = require('./controller');
const AuthService = require("../../services/auth");

router.route('/jobs/:keyword/:location')
  .all(AuthService.restrict)
  .get(controller.index);

module.exports = router;
