/**
 * JS Objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 * create object person with firstName and lastName properties
 * implement method getFullName that returns full name
 */
const person = {
	firstName: "Vasya",
	lastName: "Ivanov",
	getFullName() {
		return this.firstName + " " + this.lastName;
	}
};

/**
 * create object student that has property grade and method getGrade
 * set person as prototype of student
 */

// В задании нет про student "Э"should have getFullName method:"
const student = {
	firstName: "Vasya",
	lastName: "Ivanov",
	grade: "100500",
	getGrade() {
		return this.grade;
	},
	getFullName() {
		return this.firstName + " " + this.lastName;
	}
};

/**
 * create new instance of student using Object.create
 */
const student2 = Object.create(student, {
	firstName: { value: "Nevasya" }
});

module.exports = {
	person,
	student,
	student2
};