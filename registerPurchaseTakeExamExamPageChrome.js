var login = require('./loginPageObject.js');
var exam = require('./takeExamPageObjectChrome.js');
var profile = require('./profilePageObject.js');
var creditCard = require('./creditCardPageObject.js');
var transaction = require('./transactionPageObject.js');
var addToCart = require('./addToCartPageObject.js');
var selectState = require('./stateSelectPageObject.js');
var vars = require('./varsPageObjectChrome.js');
var discount = require('./applyDiscountPageObject.js');

describe('Purchase and then take the exam from exam page after registering', function() {
  var ptor;
  var passwd = 'tester123';
  var email;
  var time;
  var purchased = true;
  var loggedIn = true;
  var from = 'test';

  ptor = protractor.getInstance();
  
  beforeEach(function () {
    ptor.driver.get(vars.domain);
    var date = new Date();
    time = date.getTime();
    email = 'testing_'+time+'@elite.com';
  });

  it('Should register, purchase the course, and take the exam', function() {
    selectState.selectStateGACosm(ptor, vars.domainPattern);
    login.regFromHeader(ptor, email, passwd);
    ptor.waitForAngular();
    //go to home study page
    ptor.findElement(protractor.By.id('homeStudy')).click();
    addToCart.addCourseFromDetailsPage(ptor, vars.courseId);
    profile.enterProfileGA(ptor);
    ptor.waitForAngular();
    //discount.applyDiscount(ptor);
    creditCard.enterCCInfo(ptor);
    transaction.verifyTransaction(ptor, vars.courseId);
    exam.takeExamGeneric(ptor, vars.domain, vars.courseId, purchased, loggedIn, from);
    login.logoutAfterPurchase(ptor);
  }, 40000);
});

