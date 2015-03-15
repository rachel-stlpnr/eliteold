var login = require('./loginPageObject.js');
var exam = require('./takeExamPageObject.js');
var profile = require('./profilePageObject.js');
var creditCard = require('./creditCardPageObject.js');
var transaction = require('./transactionPageObject.js');
var addToCart = require('./addToCartPageObject.js');
var selectState = require('./stateSelectPageObject.js');
var vars = require('./varsPageObject.js');
var discount = require('./applyDiscountPageObject.js');

describe('Re-take and pass the exam after failing', function() {
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

  it('Should register, purchase the course, and re-take and pass a failed exam', function() {
    selectState.selectStateFL(ptor, vars.domainPattern);
    login.regFromHeader(ptor, email, passwd);
    ptor.waitForAngular();
    //go to home study page
    ptor.findElement(protractor.By.id('homeStudy')).click();
    addToCart.addCourseFromDetailsPage(ptor, vars.courseId);
    profile.enterProfile(ptor);
    ptor.waitForAngular();
    creditCard.enterCCInfo(ptor);
    transaction.verifyTransaction(ptor, vars.courseId);
    exam.retakeExamGeneric(ptor, vars.domain, vars.courseId, purchased, loggedIn, from);
    expect(ptor.isElementPresent(protractor.By.id('cert_'+vars.courseId))).toBeTruthy();
    login.logoutAfterPurchase(ptor);
  }, 40000);

  it('Should re-take and pass a failed exam, register, and purchase the course', function() {
    selectState.selectStateFL(ptor, vars.domainPattern);
    exam.retakeExamGeneric(ptor, vars.domain, vars.courseId, /*purchased*/false, /*loggedIn*/false);
    ptor.waitForAngular();
    login.regAfterExam(ptor, email, passwd);
    ptor.waitForAngular();
    profile.enterProfile(ptor);
    ptor.sleep(2000);
    creditCard.enterCCInfo(ptor);
    ptor.sleep(3000);
    transaction.verifyTransaction(ptor, vars.courseId);
    expect(ptor.isElementPresent(protractor.By.id('cert_'+vars.courseId))).toBeTruthy();
    ptor.sleep(2000);
    login.logoutAfterPurchase(ptor);
  }, 40000);
});

