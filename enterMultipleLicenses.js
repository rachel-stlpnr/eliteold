var login = require('./loginPageObject.js');
var exam = require('./takeExamPageObject.js');
var profile = require('./profilePageObject.js');
var creditCard = require('./creditCardPageObject.js');
var transaction = require('./transactionPageObject.js');
var addToCart = require('./addToCartPageObject.js');
var selectState = require('./stateSelectPageObject.js');
var vars = require('./varsPageObject.js');
var discount = require('./applyDiscountPageObject.js');

describe('Register and enter mulitple licenses', function() {
  var ptor;
  var passwd = 'tester123';
  var email;
  var time;
  var purchased = true;
  var loggedIn = true;
  var from = 'myCourses';

  ptor = protractor.getInstance();
  
  beforeEach(function () {
    ptor.driver.get(vars.domain);
    var date = new Date();
    time = date.getTime();
    email = 'testing_'+time+'@elite.com';
  });

  it('Should register and enter multiple licenses for the user profile', function() {
    selectState.selectStateFL(ptor, vars.domainPattern);
    login.regFromHeader(ptor, email, passwd);
    ptor.waitForAngular();
    //select profile to edit
    ptor.findElement(protractor.By.id("studentInfo")).click();
    ptor.findElement(protractor.By.css("ul.dropdown-menu:nth-child(3) > li:nth-child(3) > a:nth-child(1)")).click();
    profile.enterProfileMultLic(ptor);
    ptor.waitForAngular();
    ptor.findElement(protractor.By.id("studentInfo")).click();
    ptor.findElement(protractor.By.css("ul.dropdown-menu:nth-child(3) > li:nth-child(3) > a:nth-child(1)")).click();
    ptor.waitForAngular();
    expect(ptor.findElement(protractor.By.id('license1')).getAttribute('value')).toBe('T7891011');
    expect(ptor.findElement(protractor.By.selectedOption('profile.Licenses[license].Profession')).getText()).toBe('Addiction Studies');
    expect(ptor.findElement(protractor.By.selectedOption('profile.Licenses[license].State')).getText()).toBe('Alaska');
    //discount.applyDiscount(ptor);
    //creditCard.enterCCInfo(ptor);
    //transaction.verifyTransaction(ptor, vars.courseId);
    //exam.takeExamGeneric(ptor, vars.domain, vars.courseId, purchased, loggedIn, from);
    login.logoutAfterPurchase(ptor);
  }, 40000);
});

