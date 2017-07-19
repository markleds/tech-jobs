const router = require('express').Router();

const controller = require('./controller');
const AuthService = require("../../services/auth");

router.route('/')
  .all(AuthService.restrict)
  .post(controller.create);

router.route('/:job_id(\\d+)/')
  .all(AuthService.restrict)
  .get(controller.show);

module.exports = router;
