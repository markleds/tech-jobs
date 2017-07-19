const expect = require('chai').expect;
const request = require('supertest');

const app = require('../index');
// const Journal = require('../models/journal');
const Interview = require('../models/interview');
const models = require('../models');
// const JwtSetup = require("./jwt_setup");

describe('Interviews Resource', () => {

  before((done) => {
    models
    .Interview
    .create({
      journal_id: 1,
  		interview_date: "2017-04-02",
  		interviewer_name: "Bobby King",
  		interviewer_position: "Instructor",
  		interviewer_email: "bobby@bobbyking.com",
  		interviewer_phone: "383-858-2837",
  		interview_notes: "These are the notes"
    })
    .then((interview) => {
      interviewRecord = interview.dataValues;
      console.log(interviewRecord.journalId);
      done();
    })
    .catch((err) => {
      console.log(err);
    });
  });

  it('GET /journals/:journal_id/interviews should return 200 status code and an array of interviews', (done) => {
    request(app)
    .get(`/journals/${interviewRecord.journal_id}/interviews`)
    .end((err, res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an('array');
      done();
    });
  });

  it('POST /journals/:journal_id/interviews should return 201 status code and an object of the newly-created journal', (done) => {
    request(app)
    .post(`/journals/${interviewRecord.journalId}/interviews`)
    .send({
      journal: {
        journal_id: 1,
        interview_date: "2017-04-02",
        interviewer_name: "Bobby King",
        interviewer_position: "Instructor",
        interviewer_email: "bobby@bobbyking.com",
        interviewer_phone: "383-858-2837",
        interview_notes: "These are the notes"
      }
    })
    .end((err, res) => {
      expect(res.status).to.eq(201);
      expect(res.body).to.be.an('object');
      done();
    });
  });

  it('GET /journals/:journal_id/interviews/:id should return a 200 status code and an object with interview data', (done) => {
    request(app)
    .get(`/journals/${interviewRecord.journalId}/interviews/${interviewRecord.id}`)
    .end((err, res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an('object');
      done();
    });
  });

  it('PUT /journals/:journal_id/interviews/:id should return 200 status code', (done) => {
    request(app)
    .put(`/journals/${interviewRecord.journalId}/interviews/${interviewRecord.id}`)
    .send({
      interview: {
        interviewer_phone: "555-555-5555"
      }
    })
    .end((err, res) => {
      expect(res.status).to.eq(200);
      done();
    });
  });

  it('DELETE /journals/:journal_id/interviews/:id should return a 200 status code', (done) => {
    request(app)
    .delete(`/journals/${interviewRecord.journalId  }/interviews/${interviewRecord.id}`)
    .end((err, res) => {
      expect(res.status).to.eq(200);
      done();
    });
  });

});
