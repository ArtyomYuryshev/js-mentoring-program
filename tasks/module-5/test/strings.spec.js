const { describe, it } = require('mocha');
const { expect } = require('chai');

const { reverseString, centuryFromYear, strCount, truncateString, replace10, replaceConfidential, loginUser } = require('../strings');

describe('Task 1 - Reverse a string', () => {
  it('should throw an error if parameter is not a string', () => {
    expect(() => reverseString(123)).to.throw('This is not a string!');
  });

  it("should reverse a string 'hello' ", () => {
    expect(reverseString('hello')).to.equal('olleh');
  });

  it("should reverse a string 'ALLEREDNIC' ", () => {
    expect(reverseString('ALLEREDNIC')).to.equal('CINDERELLA');
  });
});

describe('Calculate a century by year', () => {
  const expectedResults = [
    [1705, 18],
    [1900, 19],
    [1601, 17],
    [2000, 20],
  ];

  expectedResults.forEach(result => {
    it(`should return ${result[1]} for ${result[0]} year`, () => {
      expect(centuryFromYear(result[0])).to.equal(result[1]);
    });
  });

  it('should return 0 if not a number is passed', () => {
    expect(centuryFromYear('ololo'), 'result is not equal to 0').to.equal(0);
  });
});

describe('Calculate count of the provided char in the string', () => {
  it('should 1 for string Hello for O letter', () => {
    expect(strCount('Hello', 'o')).to.equal(1);
  });

  it('should 2 for string Hello for l letter', () => {
    expect(strCount('Hello', 'l')).to.equal(2);
  });

  it('should return 0 if there is no such letter', () => {
    expect(strCount('Hello', 'z')).to.equal(0);
  });
});

describe('Truncate a string', () => {
  it('should truncate a string', () => {
    const actualStr = 'The longest string';
    const expectedStr = 'The lo...';
    expect(truncateString(actualStr, 6)).to.equal(expectedStr);
  });

  it('should return an initial string if the length is less than or equal to the truncated number', () => {
    const actualStr = 'eye';
    expect(truncateString(actualStr, 3)).to.equal(actualStr);
  });
});

describe('Replace 10', () => {
  it('should replace 10 in text', () => {
    expect(replace10('23105103')).to.equal('23ten5ten3');
  });
});

describe('Replace Confidential', () => {
  it('should replace confidential in text', () => {
    expect(replaceConfidential('lorem [ipsum] si [dolor]')).to.equal('lorem [CONFIDENTIAL] si [CONFIDENTIAL]');
  });
});

describe('Function loginUser', function () {
  it('should throw an Error object when the username is empty', function () {
    expect(() => loginUser('', 'password123')).to.throw(Error, 'Username cannot be empty');
  });

  it('should throw an Error object when the password is empty', function () {
    expect(() => loginUser('user123', '')).to.throw(Error, 'Password cannot be empty');
  });

  it('should check that the thrown error is indeed an instance of Error when the password is empty', function () {
    let thrownError;
    try {
      loginUser('user123', '');
    } catch (error) {
      thrownError = error;
    }
    expect(thrownError).to.be.an.instanceof(Error);
    expect(thrownError.message).to.equal('Password cannot be empty');
  });

  it('should throw an Error object when the password is less than 6 characters long', function () {
    expect(() => loginUser('user123', 'pass')).to.throw(Error, 'Password must be at least 6 characters');
  });

  it('should return a success message when the username and password are valid', function () {
    expect(loginUser('user123', 'password123')).to.equal('Login successful!');
  });
});
