/**
 * Organize a Page Object-like structure.
 * Page object definition:
 * - https://martinfowler.com/bliki/PageObject.html
 * - https://webdriver.io/docs/pageobjects/
 * - https://javascript.info/class-inheritance
 * Refresh your knowledge about Template strings: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 * Instruction:
 * 1. Create class BasePage
 * 2. BasePage should accept only one argument 'url'
 * 3. BasePage should have method 'open()' that will get 'pageName' as a parameter
 * and return the string: "Open this ${this.url}/${pageName}"
 * 4. Create class LoginPage
 * 5. LoginPage should be inherited from the BasePage
 * 6. LoginPage should use the parent constructor and extend it with one argument 'name'
 * 7. LoginPage should have 'open()' method that will call the parent's 'open()' method passing
 * 'this.name' as a parameter
 * 8. Create class Component that should accept one argument 'type' (will receive values such as 'footer' and 'header')
 * 9. Component should have 'review()' method and return the string "I can review ${this.type}"
 * 10. BasePage should have getters 'footer()' and 'header()' that will return new Component
 * passing 'footer' and 'header' respectively ( e.g return new Component('footer') )
 */

class BasePage {}

class LoginPage {}

class Component {}

module.exports = {
  BasePage,
  LoginPage,
  Component,
};
