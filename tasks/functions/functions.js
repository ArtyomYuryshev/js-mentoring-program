/**
 * Learning materials:
 * Function declaration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
 * Function expression: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
 * Arrow functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

const { str } = require("../cycles/cycles");

/**
 * write function that will do sum for two numbers
 *
 */

function sum(a, b) {
	return a + b;
}

/**
 * write function that returns firstName and lastName of a given object
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 * }
 */

function getFullName(object) {
	return object.firstName + " " + object.lastName
}

/**
 * write fuction that checks if number is odd
 * true if odd, false if even
 */

function isOdd(n) {
	return (n % 2 !== 0)
}

/**
 * write function that returns shortest of the words in the given array
 * @example
 * console.log(getShortest(["one", "two", "three"])) // one
 */

function getShortest(wordArray) {
	return wordArray.reduce((a, b) => a.length <= b.length ? a : b);
}

/**
 * write function that returns word google with given numbers of "o" symbols
 * @example
 * console.log(getGoogle(5)) // gooooogle
 */

function getGoogle(n) {
	return "g" + "o".repeat(n) + "gle";
}

/**
 * write function that returns object based on the given information 
 * (params may be null, so, please use default ones)
 * @example
 * getUser("John", "Dou", 42) should return
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 *    age: 42
 * }
 */

function getUser(firstName = null, lastName = null, age = null) {
	return {
		firstName: firstName,
		lastName: lastName,
		age: age
	};
}

/**
 * write function that calculates total path traveled.
 * path represented as array of objects with field distance and direction
 * e.g [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}]
 */

function getTotalPath(path) {
	let totalDistance = 0;
	for (let value of path) {
		totalDistance += value.distance;
	}
	return totalDistance;
}

/**
 * write a function that will calculate a discount considering the Amount
 * and the percentage (hint: you need to use the Closure here)
 * JS Closures: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 * @param {percentage} num
 * @param {amount} num
 * @example
 * const discount10 = discountFunction(10);
 * console.log(discount10(90)); // 81
 * console.log(discount10(100)); // 90
 */

function discountFunction(percentage) {
	let discount = 0;
	return function (amount) {
		discount = amount / 100 * (100 - percentage);
		return +discount.toFixed(2);
	};
}

/**
 * Write the methods inside the given objects that:
 * 1. console logs keys of the given object (please use for..in cycle)
 * 2. returns the string 'My name is John Doe and I am 25 years old. My best friend is Daniel'
 * reffering to the data stored in the object. The string should be constructed using the properties from the object
 */

const myObject = {
	name: 'John',
	lastName: 'Doe',
	age: 25,
	friends: ['Mike', 'Alan', 'Daniel'],
	keys() {
		//write your code here
		for (const objectKey in myObject) {
			console.log(objectKey);
		}
	},
	call() {
		//write your code here
		return "My name is " + this.name + " " + this.lastName + " and I am " + this.age + " years old. My best friend is " + this.friends[2];
	}
};

myObject.keys();
console.log(myObject.call());


module.exports = {
	sum,
	getFullName,
	isOdd,
	getShortest,
	getGoogle,
	getUser,
	getTotalPath,
	discountFunction,
	myObject
};