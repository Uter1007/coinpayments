const { expect } = require(`chai`);

const helper = require(`../helpers`),
  CoinpaymentsError = require(`../../lib/error`);

let client, mock;

const defaultPayload = {
  cmd: `get_tx_ids`
};

before(function() {
  client = helper.getClient();
});

afterEach(function() {
  expect(mock.isDone()).equals(true);
});

it(`Should be valid payload callback`, function(done) {
  const mockPayload = Object.assign({}, defaultPayload);

  mock = helper.prepareMock(mockPayload);
  client.getTxList(function(err, response) {
    expect(err).equal(null);
    expect(response).equal(true);
    return done();
  });
});

it(`Should be valid payload promise`, function(done) {
  const mockPayload = Object.assign({}, defaultPayload);

  mock = helper.prepareMock(mockPayload);
  client.getTxList().then(function(response) {
    expect(response).equal(true);
    return done();
  });
});
