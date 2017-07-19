const expect = require('chai').expect;
const request = require('supertest');

const app = require('../index');
const Journal = require('../models/user');
const models = require('../models');
// const JwtSetup = require("./jwt_setup");

describe('Users Resource', () => {

  before((done) => {
    models
    .User
    .create({
      first_name: "Bobby",
  		last_name: "King",
  		email: "bobby@bobbyking.com",
  		password: "taco"
    })
    .then((user) => {
      userRecord = user.dataValues;
      console.log(userRecord.id);
      done();
    })
    .catch((err) => {
      console.log(err);
    });
  });

  it('POST /users should return 201 status code and an object of the newly-created user', (done) => {
    request(app)
    .post(`/users`)
    .send({
      user: {
        first_name: "Bobby",
    		last_name: "King",
    		email: "bobby@bobbyking.com",
    		password: "taco"
      }
    })
    .end((err, res) => {
      expect(res.status).to.eq(201);
      expect(res.body).to.be.an('object');
      done();
    });
  });

});
