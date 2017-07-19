const expect = require('chai').expect;
const request = require('supertest');

const app = require('../index');
const Job = require('../models/job');
const models = require('../models');
// const JwtSetup = require("./jwt_setup");

describe('Jobs Resource', () => {

  it('POST /jobs should return 201 status code and an object of the newly-created job', (done) => {
    request(app)
    .post(`/jobs`)
    .send({
      job: {
        api_id: "GitHub",
    		job_id: "1",
    		title: "Web Developer",
    		date_created: "July 4, 2017",
    		job_type: "Full Time",
    		description: "We are looking for a good Web Developer",
    		company_name: "Google",
    		company_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2000px-Google_2015_logo.svg.png",
    		company_url: "http://google.com",
    		location: "New York, NY",
    		apply_url: "http://google.com",
    		api_logo: "http://Github.com"
      }
    })
    .end((err, res) => {
      expect(res.status).to.eq(201);
      expect(res.body).to.be.an('object');
      done();
    });
  });

  it('GET /jobs/:job_id should return a 200 status code and an object with job data', (done) => {
    request(app)
    .get(`/jobs/${jobRecord.id}`)
    .end((err, res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an('object');
      done();
    });
  });


});
