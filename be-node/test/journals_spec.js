const expect = require('chai').expect;
const request = require('supertest');

const app = require('../index');
const Journal = require('../models/journal');
const models = require('../models');
// const JwtSetup = require("./jwt_setup");

describe('Journals Resource', () => {

  before((done) => {
    models
    .Journal
    .create({
      user_id: 1,
  		job_id: 1,
  		api_id: "GitHub",
  		api_job_id: "1",
  		date_applied: "2017-04-02",
  		contact_name: "Bobby King",
  		contact_email: "bobby@bobbyking.com",
  		contact_phone: "843-376-2635",
  		notes: "These are the notes"
    })
    .then((journal) => {
      journalRecord = journal.dataValues;
      console.log(journalRecord.id);
      done();
    })
    .catch((err) => {
      console.log(err);
    });
  });

  it('GET /journals should return 200 status code and an array of journals', (done) => {
    request(app)
    .get(`/journals`)
    .end((err, res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an('array');
      done();
    });
  });

  it('POST /journals should return 201 status code and an object of the newly-created journal', (done) => {
    request(app)
    .post(`/journals`)
    .send({
      journal: {
        user_id: 1,
        job_id: 1,
        api_id: "GitHub",
        api_job_id: "1",
        date_applied: "2017-04-01",
        contact_name: "Bobby King",
        contact_email: "bobby@bobbyking.com",
        contact_phone: "843-376-2635",
        notes: "These are the notes"
      }
    })
    .end((err, res) => {
      expect(res.status).to.eq(201);
      expect(res.body).to.be.an('object');
      done();
    });
  });

  it('GET /journals/:journal_id should return a 200 status code and an object with journal data', (done) => {
    request(app)
    .get(`/journals/${journalRecord.id}`)
    .end((err, res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an('object');
      done();
    });
  });

  it('PUT /journals/:journal_id should return 200 status code', (done) => {
    request(app)
    .put(`/journals/${journalRecord.id}`)
    .send({
      journal: {
        contactPhone: "666-666-6666"
      }
    })
    .end((err, res) => {
      expect(res.status).to.eq(200);
      done();
    });
  });

  it('DELETE /journals/:journal_id should return a 200 status code', (done) => {
    request(app)
    .delete(`/journals/${journalRecord.id}`)
    .end((err, res) => {
      expect(res.status).to.eq(200);
      done();
    });
  });

});
