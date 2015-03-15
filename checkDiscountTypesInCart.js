var login = require('./loginPageObject.js');
var exam = require('./takeExamPageObject.js');
var profile = require('./profilePageObject.js');
var creditCard = require('./creditCardPageObject.js');
var transaction = require('./transactionPageObject.js');
var addToCart = require('./addToCartPageObject.js');
var selectState = require('./stateSelectPageObject.js');
var vars = require('./varsPageObject.js');
var discount = require('./applyDiscountPageObject.js');

describe('Check all discount types are being applied correctly in the cart', function() {
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

  it('Should check the regular discount is applied', function() {
    selectState.selectStateFL(ptor, vars.domainPattern);
    login.regFromHeader(ptor, email, passwd);
    ptor.waitForAngular();
    //go to home study page
    ptor.findElement(protractor.By.id('homeStudy')).click();
    addToCart.addCourseFromDetailsPage(ptor, vars.courseIdDiscounts);
    profile.enterProfile(ptor);
    ptor.waitForAngular();
    discount.applyRegDiscount(ptor);
    //creditCard.enterCCInfo(ptor);
    //transaction.verifyTransaction(ptor, vars.courseId);
    //exam.takeExamGeneric(ptor, vars.domain, vars.courseId, purchased, loggedIn, from);
    login.logoutAfterPurchase(ptor);
  }, 40000);

  it('Should check the new price discount is applied', function() {
    selectState.selectStateFL(ptor, vars.domainPattern);
    login.regFromHeader(ptor, email, passwd);
    ptor.waitForAngular();
    //go to home study page
    ptor.findElement(protractor.By.id('homeStudy')).click();
    addToCart.addCourseFromDetailsPage(ptor, vars.courseIdDiscounts);
    profile.enterProfile(ptor);
    ptor.waitForAngular();
    discount.applyNewPriceDiscount(ptor);
    //creditCard.enterCCInfo(ptor);
    //transaction.verifyTransaction(ptor, vars.courseId);
    //exam.takeExamGeneric(ptor, vars.domain, vars.courseId, purchased, loggedIn, from);
    login.logoutAfterPurchase(ptor);
  }, 40000);

  it('Should check the percentage discount is applied', function() {
    selectState.selectStateFL(ptor, vars.domainPattern);
    login.regFromHeader(ptor, email, passwd);
    ptor.waitForAngular();
    //go to home study page
    ptor.findElement(protractor.By.id('homeStudy')).click();
    addToCart.addCourseFromDetailsPage(ptor, vars.courseIdDiscounts);
    profile.enterProfile(ptor);
    ptor.waitForAngular();
    discount.applyPercentageDiscount(ptor);
    //creditCard.enterCCInfo(ptor);
    //transaction.verifyTransaction(ptor, vars.courseId);
    //exam.takeExamGeneric(ptor, vars.domain, vars.courseId, purchased, loggedIn, from);
    login.logoutAfterPurchase(ptor);
  }, 40000);

});

