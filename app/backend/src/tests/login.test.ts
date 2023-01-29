import * as sinon from "sinon";
import * as chai from "chai";
import * as bcrypt from "bcryptjs";

// @ts-ignore
import chaiHttp = require("chai-http");

import { app } from "../app";
import Users from "../database/models/Users";
import userMock from "./mocks/user.mock";


chai.use(chaiHttp);

const { expect } = chai;


describe("testing the login endpoint", () => {
  beforeEach(async () => {
    sinon.stub(Users, "findOne").resolves({ ...userMock } as Users);
    sinon.stub(bcrypt, "compare").resolves(true);
  });

  afterEach(() => {
    (Users.findOne as sinon.SinonStub).restore();
    (bcrypt.compare as sinon.SinonStub).restore();
  });

  it("testing a valid login", async () => {
    const email = userMock.email;
    const password = userMock.password;
    const result = await chai
      .request(app)
      .post("/login")
      .send({ email, password });

    expect(result.status).to.be.equal(200);
    expect(result.body).have.property("token");
  });

  it("testing a invalid login", async () => {
    const email = "";
    const password = "";
    const result = await chai
      .request(app)
      .post("/login")
      .send({ email, password });
    
    expect(result.status).to.be.equal(400);
    expect(result.text).to.be.deep.equal('{"message":"All fields must be filled"}');
  });
});