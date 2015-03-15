var login = require('./loginPageObject.js');
var exam = require('./takeExamPageObject.js');
var profile = require('./profilePageObject.js');
var creditCard = require('./creditCardPageObject.js');
var transaction = require('./transactionPageObject.js');
var vars = require('./varsPageObject.js');
var discount = require('./applyDiscountPageObject.js');
var selectState = require('./stateSelectPageObject.js');

describe('Purchase after taking exam and signing in', function() {
  var ptor;
  var passwd = 'tester123';
  var email;
  var time;
  var purchased = false;
  var loggedIn = false;
 
  ptor = protractor.getInstance();
  
  beforeEach(function () {
    ptor.driver.get(vars.domain);
    var date = new Date();
    time = date.getTime();
    email = 'testing_'+time+'@elite.com';
  });

  it('Should take exam, sign in, and purchase the course', function() {
    login.regFromHeader(ptor, email, passwd);
    expect(ptor.getCurrentUrl()).toBe(vars.domain+'/USA/student/courses');
    ptor.findElement(protractor.By.css('a[href="/USA/student/logout"]')).click();
    expect(ptor.getCurrentUrl()).toBe(vars.domain+'/USA/student/logout');
    ptor.sleep(4000);
    ptor.driver.get(vars.domain);
    selectState.selectStateFL(ptor, vars.domainPattern);
    ptor.waitForAngular();
    //exam.takeExam(ptor, vars.domain, courseId);
    exam.takeExamGeneric(ptor, vars.domain, vars.courseId, purchased, loggedIn);
    ptor.waitForAngular();
    login.loginAfterExam(ptor, email, passwd);
    ptor.waitForAngular();
    profile.enterProfile(ptor);
    ptor.sleep(2000);
    //discount.applyDiscount(ptor);
    creditCard.enterCCInfo(ptor);
    ptor.sleep(3000);
    transaction.verifyTransaction(ptor, vars.courseId);
    login.logoutAfterPurchase(ptor);
  }, 40000);
});

