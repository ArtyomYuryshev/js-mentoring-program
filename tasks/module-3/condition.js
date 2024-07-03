/** Task: 1
 * The system receives two params x and y.
 * Implement the logic when z equal to sum of x and y in case if y less than 10
 * or multiplication in case of greater or equal than 10
 * result assign to z1 and z2 variables accordingly
 * Task A - if else - z1 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
 * Task B - ternary operator - z2: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */
function taskA(x, y) {
  let z1;
  //PLACE YOUR CODE BETWEEN THIS LINE:

  //AND THIS ONE:
  return z1;
}

function taskB(x, y) {
  let z2;
  //PLACE YOUR CODE BETWEEN THIS LINE:

  //AND THIS ONE:
  return z2;
}

/** Task: 2
 * The system receives 3 params - operator, alpha, beta.
 * Operator can have 4 possible values - "add", "subtract", "multiply", "divide".
 * Implement the logic when the system does appropriate operation based on the passed operator param.
 * Assign result to task2 variable
 * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
 */

function calc(operator, alpha, beta) {
  let task2;
  //PLACE YOUR CODE BETWEEN THIS LINE:

  //AND THIS ONE:
  return task2;
}

/**
 * Task: 3
 * Write the logic that will calculate the amount of discount
 * considering the 'ransom' amount
 * Rules are the following:
 * - 0    - 350:  0
 * - 351  - 1350: 15
 * - 1351 - 2700: 30
 * - 2701 - 6500: 45
 * assign the result to the 'discount' variable
 */

function calculateDiscount(ransom) {
  let discount;
  //PLACE YOUR CODE BETWEEN THIS LINE:

  //AND THIS ONE:
  return discount;
}

module.exports = {
  taskA,
  taskB,
  calc,
  calculateDiscount,
};
