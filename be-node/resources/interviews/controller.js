const models =
require('../../models');

let controller = {};

controller.index = (req, res) => {
  models
  .Interview
  .findAll({where: {journal_id: req.params.journal_id} })
  .then((interviews) => {
    res
    .status(200)
    .json(interviews);
  })
  .catch((err) => {
    res
    .status(400)
    .json(err);
  });
}

controller.create = (req, res) => {
  models
  .Interview
  .create(req.body.interview)
  .then((interview) => {
    res
    .status(201)
    .json(interview);
  })
  .catch((err) => {
    res
    .status(400)
    .json(err);
  });
}

controller.show = (req, res) => {
  models
  .Interview
  .findOne({
    where: {
      id: req.params.id
    },
    include: [{
      model: models.Journal,
      include: [{
        model: models.Job
      },
      {
        model: models.Interview
      }]
    }]
  })
  .then((interview) => {
    res
    .status(200)
    .json(interview);
  })
  .catch((err) => {
    res
    .status(400)
    .json(err);
  });
}

controller.update = (req, res) => {
  models
  .Interview
  .update(req.body.interview, {where: {id: req.params.id} })
  .then(() => {
    res
    .sendStatus(200)
  })
  .catch((err) => {
    res
    .status(400)
    .json(err);
  });
}

controller.destroy = (req, res) => {
  models
  .Interview
  .destroy({where: {id: req.params.id} })
  .then(() => {
    res
    .sendStatus(200);
  })
  .catch((err) => {
    res
    .status(400)
    .json(err);
  });
}

module.exports = controller;
