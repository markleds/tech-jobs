const router = require('express').Router({ mergeParams: true });

const controller = require('./controller');
const AuthService = require("../../services/auth");

router.route('/')
  .all(AuthService.restrict)
  .get(controller.index)
  .post(controller.create);

router.route('/:id(\\d+)/')
  .all(AuthService.restrict)
  .get(controller.show)
  .put(controller.update)
  .delete(controller.destroy);

module.exports = router;
