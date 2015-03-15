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
    //ptor.driver.get("http://www.test.elitecme.com");
    login.regFromHeader(ptor, email, passwd);
    ptor.waitForAngular();
    //go to home study page
    ptor.driver.get("http://www.test.elitecme.com/corporate/105509");
    /*
    ptor.findElements(protractor.By.repeater('course in courseList.data.Courses').column('course.Subtitle')).then(function(arr) { 
      //expect(arr.length).toEqual(5); 
      console.log(arr.length);
    });
    */
    ptor.debugger();
    ptor.findElement(protractor.By.id('SWWA06ET09')).click();
    //expect(ptor.findElement(protractor.By.id(vars.corpCourseId+'_price')).getText()).toContain('$0.00');
    //addToCart.addCourseFromHomeStudyPageCorp(ptor, vars.corpCourseId);
    //profile.enterProfile2(ptor);
    //ptor.findElement(protractor.By.css('.buttons input[type="submit"]')).click();
  }, 40000);
});

