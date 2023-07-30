// @ts-check

/**
 * @typedef {object} User
 * @property {string} name - User name
 * @property {string} password - User password
 */

/** @type {User} */
const user = {
  name: 'John',
  password: '123456',
};

/**
 * This adds two numbers
 * !! Note that this function has side effects
 * @param {number} a
 * @param {number} b
 */
function add(a, b) {
  return a + b;
}

add(1, 2);
add('1', '2');

console.log(user.passord); // John
