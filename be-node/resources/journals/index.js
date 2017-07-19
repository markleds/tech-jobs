const router = require('express').Router();

const controller = require('./controller');
const AuthService = require("../../services/auth");

router.route('/')
  .all(AuthService.restrict)
  .get(controller.index)
  .post(controller.create);

router.route('/:journal_id(\\d+)/')
  .all(AuthService.restrict)
  .get(controller.show)
  .put(controller.update)
  .delete(controller.destroy);

module.exports = router;
