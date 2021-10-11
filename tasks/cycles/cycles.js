/** Task: 1
 * implement factorial algorithm using for, while, do..while operators
 * assign the result to corresponding variable
 * for -> forFactorial: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 * while -> whileFactorial: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
 * do..while -> doFactorial: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while
 */
let forFactorial, whileFactorial, doFactorial;
const n = 10; //10! = 3628800

forFactorial = 1;
for (let i = 1; i <= n; i++) {
  forFactorial *= i;
}

whileFactorial = 1;
let i = 1;
while (i <= n) {
  whileFactorial *= i;
  i++;
}

doFactorial = 1;
let j = 1;
do {
  doFactorial *= j;
  j++;
} while (j <= n)

/** Task: 2
 * return the concatenated string from an array of substring
 * assign the result to variable 'str'
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 */
let str;
const substr = ["I", " love", " JS"];

str = "";
for (elementOfArray of substr) {
  str += elementOfArray;
}

/** Task: 3
 * calculate a total of income of certain person
 * assign the result to the variable 'totalIncome'
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
 */
let totalIncome;
const personIncomes = {
  salary: 1985,
  rent: -600,
  interestOnDeposit: 250,
  otherExpences: -300
};

totalIncome = 0;
for (let keyOfObject in personIncomes) {
  totalIncome += personIncomes[keyOfObject];
}

module.exports = {
  forFactorial,
  whileFactorial,
  doFactorial,
  str,
  totalIncome
};