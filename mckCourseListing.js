/*
var login = require('./loginPageObject.js');
var exam = require('./takeExamPageObject.js');
var profile = require('./profilePageObject.js');
var creditCard = require('./creditCardPageObject.js');
var transaction = require('./transactionPageObject.js');
var addToCart = require('./addToCartPageObject.js');
var selectState = require('./stateSelectPageObject.js');
var vars = require('./varsPageObject.js');
var discount = require('./applyDiscountPageObject.js');
*/

describe('Test course listings', function() {
  var ptor;
  var passwd = 'tester123';
  var email;
  var time;
  var purchased = false;
  var loggedIn = true;
  var domain = 'http://beta.mckissock.com/commonforms/courselistings/alacarte.aspx?mst=CA&mlt=1';

  ptor = protractor.getInstance();
  
  beforeEach(function () {
    var date = new Date();
    time = date.getTime();
    email = 'testing_'+time+'@elite.com';
  });

  it('Should select course filters', function() {
    browser.get(domain);
    //var sort = element(by.model('sort'));
    expect(browser.isElementPresent(by.model('sort'))).toBe(true);
    //ptor.driver.get(domain);
    //ptor.ignoreSynchronization = true;
    //ptor.waitForAngular();
    //expect(ptor.findElement(protractor.By.id('piechart'))).toBeTruthy();
    //ptor.sleep(3000);
  }, 40000);
});

