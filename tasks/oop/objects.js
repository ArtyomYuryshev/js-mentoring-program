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
const student = {
	grade: "100500",
	getGrade() {
		return this.grade;
	}
};
//student.__proto__ = person; // to-do: https://developer.mozilla.org/ru/docs/Learn/JavaScript/Objects/Object_prototypes
Object.setPrototypeOf(student, person); // to-do https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf

/**
 * create new instance of student using Object.create
 */
const student2 = Object.create(student);

module.exports = {
	person,
	student,
	student2
};