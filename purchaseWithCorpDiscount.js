var login = require('./loginPageObject.js');
var exam = require('./takeExamPageObject.js');
var profile = require('./profilePageObject.js');
var creditCard = require('./creditCardPageObject.js');
var transaction = require('./transactionPageObject.js');
var addToCart = require('./addToCartPageObject.js');
var selectState = require('./stateSelectPageObject.js');
var vars = require('./varsPageObject.js');
var discount = require('./applyDiscountPageObject.js');

describe('Purchase with corporae discount', function() {
  var ptor;
  var passwd = 'tester123';
  var email;
  var time;
  var purchased = true;
  var loggedIn = true;
  var from = 'myCourses';

  ptor = protractor.getInstance();
  ptor.ignoreSynchronization = true;

  beforeEach(function () {
    var date = new Date();
    time = date.getTime();
    email = 'testing_'+time+'@elite.com';
  });

  it('Should purchase a course from a corporate account', function() {
    //ptor.driver.get(vars.domainCorp);
    ptor.driver.get("https://www.stage.elitecme.com");
    ptor.findElement(protractor.By.xpath('/html/body/div/div/div[2]/div/article/section/form/div[2]/select/option[17]')).click()
    ptor.findElement(protractor.By.xpath('/html/body/div/div/div[2]/div/article/section/form/div[2]/input')).click();
    ptor.findElement(protractor.By.model('accountId')).sendKeys('105509');
    ptor.findElement(protractor.By.xpath('/html/body/div/div/div[2]/div[2]/article/form/div[2]/input')).click();
    //login.regFromHeaderCorp(ptor, email, passwd);
    //ptor.debugger();
    //ptor.driver.get(vars.domainCorp);
    /*
    ptor.findElements(protractor.By.repeater('course in courseList.data.Courses').column('course.Subtitle')).then(function(arr) { 
      //expect(arr.length).toEqual(5); 
      console.log(arr.length);
    });
    */
    ptor.sleep(1500);
    //expect(ptor.findElement(protractor.By.id(vars.corpCourseId+'_price')).getText()).toContain('$0.00');
    addToCart.addCourseFromHomeStudyPageCorp(ptor, vars.corpCourseId);
    ptor.sleep(1500);
    login.regAfterAddtoCartCorp(ptor, email, passwd);
    profile.enterProfile2(ptor);
    ptor.sleep(1500);
    ptor.findElement(protractor.By.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div/form/div/button')).click();
    ptor.sleep(2000);
    expect(ptor.findElement(protractor.By.xpath('/html/body/div/div/div[2]/div[2]/div[2]/article[2]/div/div[2]')).getText()).toMatch(/Amount Charged:\s*\$0.00/);
    ptor.sleep(2000);
    login.logoutCorp(ptor, email, passwd);
  }, 40000);
});

