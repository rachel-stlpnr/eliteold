var login = require('./loginPageObject.js');
var exam = require('./takeExamPageObject.js');
var profile = require('./profilePageObject.js');
var creditCard = require('./creditCardPageObject.js');
var transaction = require('./transactionPageObject.js');
var addToCart = require('./addToCartPageObject.js');
var selectState = require('./stateSelectPageObject.js');
var vars = require('./varsPageObject.js');
var discount = require('./applyDiscountPageObject.js');

describe('Purchase pharmacy course after registering', function() {
  var ptor;
  var passwd = 'tester123';
  var email;
  var time;
  var purchased = true;
  var loggedIn = true;
  var from = 'myCourses';

  ptor = protractor.getInstance();
  
  beforeEach(function () {
    ptor.driver.get(vars.pharmDomain);
    var date = new Date();
    time = date.getTime();
    email = 'testing_'+time+'@elite.com';
  });

  it('Should register and purchase the pharmacy course', function() {
    selectState.selectStateFLPharm(ptor, vars.pharmDomainPattern);
    login.regFromHeader(ptor, email, passwd);
    ptor.waitForAngular();
    //go to home study page
    ptor.findElement(protractor.By.id('homeStudy')).click();
    addToCart.addCourseFromDetailsPage(ptor, vars.pharmCourseId);
    profile.enterProfilePharm(ptor);
    ptor.waitForAngular();
    creditCard.enterCCInfoNoDiscount(ptor);
    login.logoutAfterPurchase(ptor);
  }, 40000);
});

