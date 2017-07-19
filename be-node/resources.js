const router = require("express").Router();

router.use('/users',
  require('./resources/users')
);

router.use(
  '/journals',
  require('./resources/journals')
);

router.use(
  '/journals/:journal_id/interviews',
  require('./resources/interviews')
);

router.use(
  '/jobs',
  require('./resources/jobs')
);

router.use(
  '/api',
  require('./resources/api')
)

module.exports = router;
