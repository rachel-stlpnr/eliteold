var login = require('./loginPageObject.js');
var exam = require('./takeExamPageObject.js');
var profile = require('./profilePageObject.js');
var creditCard = require('./creditCardPageObject.js');
var transaction = require('./transactionPageObject.js');
var vars = require('./varsPageObject.js');
var discount = require('./applyDiscountPageObject.js');
var selectState = require('./stateSelectPageObject.js');

describe('Take exam from right navigation menu and register', function() {
  var ptor;
  var passwd = 'tester123';
  var email;
  var time;
  var purchased = false;
  var loggedIn = false;
  var from = 'test';

  ptor = protractor.getInstance();
  
  beforeEach(function () {
    ptor.driver.get(vars.domain);
    var date = new Date();
    time = date.getTime();
    email = 'testing_'+time+'@elite.com';
  });

  it('Should take exam from right navigation menu, register, and purchase the course', function() {
    selectState.selectStateFL(ptor, vars.domainPattern);
    //exam.takeExamTakeATestLink(ptor, vars.domain, courseId);
    exam.takeExamGeneric(ptor, vars.domain, vars.courseId, purchased, loggedIn, from);
    ptor.waitForAngular();
    login.regAfterExam(ptor, email, passwd);
    ptor.waitForAngular();
    profile.enterProfile(ptor);
    ptor.sleep(2000);
    creditCard.enterCCInfo(ptor);
    ptor.sleep(3000);
    transaction.verifyTransaction(ptor, vars.courseId);
    login.logoutAfterPurchase(ptor);
  }, 40000);
});

