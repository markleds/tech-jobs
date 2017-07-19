const models =
require('../../models');

let controller = {};

controller.create = (req, res) => {
  // console.log(req.body.job);
  models
  .Job
  .findOrCreate({
    where: {
      api_job_id: req.body.job.api_job_id
    },
    defaults: req.body.job
  })
  .then((response) => {
    const job = response[0];
    res
    .status(201)
    .json(job);
  })
  .catch((err) => {
    res
    .status(400)
    .json(err.toString());
  });
}

controller.show = (req, res) => {
  models
  .Job
  .findOne({
    where:{
      id: req.params.job_id
    }
  })
  .then((job) => {
    res
    .status(201)
    .json(job);
  })
  .catch((err) => {
    res
    .status(400)
    .json(err);
  });
}

module.exports = controller;
