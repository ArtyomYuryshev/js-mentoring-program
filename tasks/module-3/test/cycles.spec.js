const { expect } = require('chai');

const { forFactorial, whileFactorial, doFactorial, str, totalIncome } = require('../cycles');

describe('Task1', () => {
  it('forFactorial', () => {
    expect(forFactorial).to.equal(3628800);
  });

  it('whileFactorial', () => {
    expect(whileFactorial).to.equal(3628800);
  });

  it('doFactorial', () => {
    expect(doFactorial).to.equal(3628800);
  });
});

describe('Task2', () => {
  it('str', () => {
    expect(str).to.equal('I love JS');
  });
});

describe('Task3', () => {
  it('total income', () => {
    expect(totalIncome).to.equal(1335);
  });
});
