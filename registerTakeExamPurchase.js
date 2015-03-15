var login = require('./loginPageObject.js');
var exam = require('./takeExamPageObject.js');
var profile = require('./profilePageObject.js');
var creditCard = require('./creditCardPageObject.js');
var transaction = require('./transactionPageObject.js');
var addToCart = require('./addToCartPageObject.js');
var selectState = require('./stateSelectPageObject.js');
var vars = require('./varsPageObject.js');
var discount = require('./applyDiscountPageObject.js');

describe('Purchase after registering and taking the exam', function() {
  var ptor;
  var passwd = 'tester123';
  var email;
  var time;
  var purchased = false;
  var loggedIn = true;

  ptor = protractor.getInstance();
  
  beforeEach(function () {
    var date = new Date();
    time = date.getTime();
    email = 'testing_'+time+'@elite.com';
  });

  it('Should register, take exam, and purchase the course', function() {
    ptor.driver.get(vars.domain);
    selectState.selectStateFL(ptor, vars.domainPattern);
    login.regFromHeader(ptor, email, passwd);
    ptor.waitForAngular();
    //go to home study page
    //ptor.findElement(protractor.By.id('homeStudy')).click();

    //use link to individual courses instead of package UI
    ptor.findElement(protractor.By.id('courses')).click();
    ptor.waitForAngular();
    exam.takeExamGeneric(ptor, vars.domain, vars.courseId, purchased, loggedIn);
    ptor.waitForAngular();
    profile.enterProfile(ptor);
    ptor.waitForAngular();
    //discount.applyDiscount(ptor);
    creditCard.enterCCInfo(ptor);
    ptor.sleep(2000);
    transaction.verifyTransaction(ptor, vars.courseId);
    login.logoutAfterPurchase(ptor);
  }, 40000);
});

