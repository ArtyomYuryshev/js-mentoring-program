const { getDogs, getCats, getBirds, firstPromise, secondPromise } = require('./utils/utilPromises');

/**
 * Task-1: Create a promise with the resolve state
 * Implement a promise what will be resolved with "Resolved!" string
 * @returns {Promise<"Resolved!">}
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
 */

function promiseResolve() {
  //PLACE YOUR CODE HERE:
}

/**
 * Task-2: Create a promise with the reject state
 * Implement a promise what will be rejected with "Rejected!" string
 * @returns {Promise<"Rejected!">}
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject
 */

function promiseReject() {
  //PLACE YOUR CODE HERE:
}

/**
 * Task-3: Create a promise with both resolve and reject states
 * Should resolve when param === true with "Resolved!" string
 * Should reject when param === false with "Rejected!" string
 * hint: use new Promise()
 */

function fullPromise(param) {
  //PLACE YOUR CODE HERE:
}

/**
 * Task-4: Chain two promises (firstPromise() and secondPromise() from the './utils/utilPromises' file)
 * and store the result to the variable 'chainingResult' = 'Promises chained';
 * Please do the chaining inside the promisesChaining function (please do NOT use async/await)
 * @returns {Promise<"Promises chained">}
 */
function promisesChaining() {
  let chainingResult = '';

  //PLACE YOUR CODE BETWEEN THIS LINE:

  //AND THIS ONE
}

/**
 * Task-5:
 * 1. Implement a function getAnimals() that will return the result of 3 promises: getDogs(), getCats() and getBirds() from the './utils/utilPromises' file;
 * 2. Please use .then() operator
 * 3. Convert ['dogs', 'cats', 'birds'] -> ['DOGS', 'CATS', 'BIRDS']
 * getAnimals() -> ['DOGS', 'CATS', 'BIRDS']
 * @returns {Promise<"['DOGS', 'CATS', 'BIRDS']">}
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 * do NOT use async/await syntax here
 */

function getAnimals() {
  //PLACE YOUR CODE BETWEEN THIS LINE:
  //AND THIS ONE
}

/**
 * Task-6:
 * Create a promise that resolves after 1 second of delay with the text "Resolved"
 * @returns
 */

function promiseWithDelay() {
  //PLACE YOUR CODE HERE:
}

module.exports = {
  promiseResolve,
  promiseReject,
  fullPromise,
  getAnimals,
  promisesChaining,
  promiseWithDelay,
};
