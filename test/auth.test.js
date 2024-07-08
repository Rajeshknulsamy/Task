const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');
const { expect } = chai;

chai.use(chaiHttp);

describe('Auth API', () => {
  it('should register a new user', (done) => {
    chai.request(app)
      .post('/api/auth/register')
      .send({ email: 'test@example.com', password: 'password123' })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('msg').eql('Registration successful, please check your email for verification link');
        done();
      });
  });
});
