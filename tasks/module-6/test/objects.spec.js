const { describe, it } = require('mocha');
const { expect } = require('chai');

const { car, person, student, student2 } = require('../objects.js');

describe('Car Object', function () {
  it('should have a make property of type string', function () {
    expect(car).to.have.property('make');
    expect(car.make).to.be.a('string');
  });

  it('should have a model property of type string', function () {
    expect(car).to.have.property('model');
    expect(car.model).to.be.a('string');
  });

  it('should have a year property of type number', function () {
    expect(car).to.have.property('year');
    expect(car.year).to.be.a('number');
  });

  it('should have a color property of type string', function () {
    expect(car).to.have.property('color');
    expect(car.color).to.be.a('string');
  });

  it('should change color and return new color of type string', function () {
    const newColor = 'blue';
    const result = car.changeColor(newColor);
    expect(result).to.equal(newColor);
    expect(car.color).to.equal(newColor);
    expect(result).to.be.a('string');
  });
});

describe('person', () => {
  it('should have firstName property', () => {
    expect(person).to.have.property('firstName');
  });

  it('should have lastName property', () => {
    expect(person).to.have.property('lastName');
  });

  it('should have getFullName method', () => {
    expect(person.getFullName()).to.equal(`${person.firstName} ${person.lastName}`);
  });
});

describe('student', () => {
  it('should have firstName property', () => {
    expect(student).to.have.property('firstName');
  });

  it('should have lastName property', () => {
    expect(student).to.have.property('lastName');
  });

  it('should have grade property', () => {
    expect(student).to.have.property('grade');
  });

  it('should have getGrade method', () => {
    expect(student.getGrade()).to.equal(student.grade);
  });

  it('should have getFullName method', () => {
    expect(student.getFullName()).to.equal(`${student.firstName} ${student.lastName}`);
  });

  it('should have person as prototype', () => {
    const prototype = Object.getPrototypeOf(student);
    expect(prototype, `object "person" is not prototype of "student"`).to.equal(person);
  });
});

describe('student2', () => {
  it('should have grade property', () => {
    expect(student2).to.have.property('grade');
  });

  it('should have getGrade method', () => {
    expect(student2.getGrade()).to.equal(student2.grade);
  });
});
