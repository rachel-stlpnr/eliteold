var login = require('./loginPageObject.js');
var exam = require('./takeExamPageObject.js');
var profile = require('./profilePageObject.js');
var creditCard = require('./creditCardPageObject.js');
var transaction = require('./transactionPageObject.js');
var addToCart = require('./addToCartPageObject.js');
var selectState = require('./stateSelectPageObject.js');
var vars = require('./varsPageObject.js');
var discount = require('./applyDiscountPageObject.js');

describe('Purchase then register and take the exam', function() {
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

  it('Should purchase the course, register, and take the exam', function() {
    selectState.selectStateFL(ptor, vars.domainPattern);
    ptor.waitForAngular();
    addToCart.addCourseFromDetailsPage(ptor, vars.courseId);
    login.regAfterAddtoCart(ptor, email, passwd);
    profile.enterProfile(ptor);
    //discount.applyDiscount(ptor);
    creditCard.enterCCInfo(ptor);
    transaction.verifyTransaction(ptor, vars.courseId);
    //exam.takeExamFromMyCourses(ptor, vars.courseId);
    exam.takeExamGeneric(ptor, vars.domain, vars.courseId, purchased, loggedIn, from);
    login.logout(ptor, email, passwd);
  }, 40000);
});

