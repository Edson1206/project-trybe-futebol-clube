import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Matches from '../database/models/Matches';
import { MatchesMock, token } from './mocks/match.mock';

chai.use(chaiHttp);
const newMatch = {
  "homeTeam": 16, 
  "awayTeam": 8, 
  "homeTeamGoals": 2,
  "awayTeamGoals": 2
}

const { expect } = chai;

describe('testing the matches endpoint', () => { 
  describe('get /matches', () => {
    beforeEach(() => {
      sinon.stub(Matches, 'findAll').resolves(MatchesMock as unknown as Matches[]);
    })

    afterEach(() => {
      (Matches.findAll as sinon.SinonStub).restore();
    })
    it('Returning the matches list with the status 200', async () => {
      const response = await chai.request(app).get('/matches');
      expect(response.body).to.be.an('array');
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(MatchesMock);
    })
  })
  describe('rote PATCH /matches/:id', () => {
    beforeEach(() => {
      sinon.stub(Matches, 'findOne').resolves(MatchesMock[0] as unknown as Matches);
    })

    afterEach(() => {
      (Matches.findOne as sinon.SinonStub).restore();
    })
    it('Returning a match with status 200', async () => {
      const response = await chai.request(app)
      .patch('/matches/1').set('content-type', 'application/json')
      .send({ "home_score": 2, "away_score": 1 });
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.equal({ message: 'Updated' });
    })
  })
  describe('Using the query ?inProgress=true', () => {
    beforeEach(() => {
      sinon.stub(Matches, 'findAll').resolves(MatchesMock as unknown as Matches[]);
    })

    afterEach(() => {
      (Matches.findAll as sinon.SinonStub).restore();
    })
    it('Returning the list of matches in progress with the status 200', async () => {
      const response = await chai.request(app).get('/matches?inProgress=true');
      expect(response.body).to.be.an('array');
      expect(response.status).to.be.equal(200);
    })
    it('Returning the list of completed matches with the status 200', async () => {
      const response = await chai.request(app).get('/matches?inProgress=false');
      expect(response.body).to.be.an('array');
      expect(response.status).to.be.equal(200);
    })
    it('Changing the status of a match in progress to finished', async () => {
      const response = await chai.request(app)
      .patch('/matches/1/finish')
      expect(response.body).to.be.an('object');
      expect(response.status).to.be.equal(200);
    })
  })
  describe('route POST /matches', () => {
    beforeEach(() => {
      sinon.stub(Matches, 'create').resolves(MatchesMock as unknown as Matches);
    })

    afterEach(() => {
      (Matches.create as sinon.SinonStub).restore();
    })
    it('Creating a match with status 201', async () => {
      const response = await chai.request(app)
      .post('/matches')
      .set('authorization', token)
      .send(newMatch);
      expect(response.body).to.be.an('object');
      expect(response.status).to.be.equal(201);
    })
  })
});