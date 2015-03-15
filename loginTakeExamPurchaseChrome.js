var login = require('./loginPageObject.js');
var exam = require('./takeExamPageObjectChrome.js');
var profile = require('./profilePageObject.js');
var creditCard = require('./creditCardPageObject.js');
var transaction = require('./transactionPageObject.js');
var addToCart = require('./addToCartPageObject.js');
var selectState = require('./stateSelectPageObject.js');
var vars = require('./varsPageObjectChrome.js');
var discount = require('./applyDiscountPageObject.js');
var discount = require('./applyDiscountPageObject.js');

describe('Purchase after signing in and taking the exam', function() {
  var ptor;
  var passwd = 'tester123';
  var email;
  var time;
  var purchased = false;
  var loggedIn = true;

  ptor = protractor.getInstance();
  
  beforeEach(function () {
    ptor.driver.get(vars.domain);
    var date = new Date();
    time = date.getTime();
    email = 'testing_'+time+'@elite.com';
  });

  it('Should sign in, take exam, and purchase the course', function() {
    login.regFromHeader(ptor, email, passwd);
    expect(ptor.getCurrentUrl()).toBe(vars.domain+'/USA/student/courses');
    login.logoutAfterReg(ptor, vars.domain);
    ptor.waitForAngular();
    login.loginFromHeader(ptor, email, passwd);
    ptor.waitForAngular();
    ptor.driver.get(vars.domain);
    selectState.selectStateGACosm(ptor, vars.domainPattern);
    //exam.takeExamLoggedIn(ptor, vars.domain, vars.courseId);
    exam.takeExamGeneric(ptor, vars.domain, vars.courseId, purchased, loggedIn);
    ptor.waitForAngular();
    profile.enterProfileGA(ptor);
    ptor.sleep(2000);
    //discount.applyDiscount(ptor);
    creditCard.enterCCInfo(ptor);
    ptor.sleep(3000);
    transaction.verifyTransaction(ptor, vars.courseId);
    login.logoutAfterPurchase(ptor);
  }, 40000);
});

