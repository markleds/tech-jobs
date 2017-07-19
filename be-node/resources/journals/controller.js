const models =
require('../../models');

let controller = {};

controller.index = (req, res) => {
  models
  .Journal
  .findAll({
    where: {
      'user_id': req.user.id
    },
    include: [{
      model: models.Job
    }]
  })
  .then((journals) => {
    res
    .status(200)
    .json(journals);
  })
  .catch((err) => {
    res
    .status(400)
    .json(err);
  });
}

controller.create = (req, res) => {
  req.body.journal.user_id = req.user.id;
  models
  .Journal
  .findOrCreate({
    where: {
      user_id: req.body.journal.user_id,
      job_id: req.body.journal.job_id
    },
    defaults: req.body.journal
  })
  .then((response) => {
    const journal = response[0];
    res
    .status(201)
    .json(journal);
  })
  .catch((err) => {
    res
    .status(400)
    .json(err);
  });
}

controller.show = (req, res) => {
  models
  .Journal
  .findOne({
      where: {
          id: req.params.journal_id
      },
      include: [{
        model: models.Interview
      },
      {
        model: models.Job
      }]
  })
  .then((journal) => {
    res
    .status(200)
    .json(journal);
  })
  .catch((err) => {
    res
    .status(400)
    .json(err.toString());
  });
}

controller.update = (req, res) => {
  models
  .Journal
  .update(req.body.journal, { where: { id: req.params.journal_id} })
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

controller.destroy = (req, res) => {
  models
  .Journal
  .destroy({where: {id: req.params.journal_id} })
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
