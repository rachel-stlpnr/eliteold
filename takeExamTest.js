var login = require('./loginPageObject.js');
var exam = require('./takeExamPageObject.js');
var profile = require('./profilePageObject.js');

describe('massage homepage', function() {
  var ptor;
  var passwd = 'tester123';
  var email;
  var time;
  var courseId = 'MFL02CPI13';
  var domain = 'http://massage.local.elitecme.com';

  ptor = protractor.getInstance();
  ptor.driver.get(domain);
  
  beforeEach(function () {
    var date = new Date();
    time = date.getTime();
    email = 'testing_'+time+'@elite.com';
  });

  it('Should take exam, sign in, and purchase the course', function() {
    login.regFromHeader(ptor, email, passwd);
    expect(ptor.getCurrentUrl()).toBe(domain+'/USA/student/courses');
    ptor.findElement(protractor.By.css('a[href="/USA/student/logout"]')).click();
    expect(ptor.getCurrentUrl()).toBe(domain+'/USA/student/logout');
    exam.takeExam(ptor, domain, courseId);
    ptor.waitForAngular();
    login.loginAfterExam(ptor, email, passwd);
    ptor.waitForAngular();
    /*
    ptor.findElement(protractor.By.id('checkoutButton')).click();
    ptor.findElement(protractor.By.id('first_name')).sendKeys('Test');
    ptor.findElement(protractor.By.id('last_name')).sendKeys('User');
    ptor.findElement(protractor.By.id('address1')).sendKeys('842 Main St');
    ptor.findElement(protractor.By.id('address2')).sendKeys('none');
    ptor.findElement(protractor.By.id('city')).sendKeys('Redwood City');
    ptor.findElement(protractor.By.css('select option:nth-child(7)')).click();
    ptor.findElement(protractor.By.id('zip')).sendKeys('94063');
    ptor.findElement(protractor.By.id('phone')).sendKeys('555-555-5555');
    ptor.findElement(protractor.By.id('license1')).sendKeys('T123456');
    expect(ptor.findElement(protractor.By.selectedOption('profile.Licenses[0].State')).getText()).toBe('Florida');
    ptor.findElement(protractor.By.css('.buttons input[type="submit"]')).click();
    */
    profile.enterProfile(ptor);
    ptor.sleep(2000);
    ptor.findElement(protractor.By.id('cardholder_firstname')).sendKeys('Test');
    ptor.findElement(protractor.By.id('cardholder_lastname')).sendKeys('User');
    ptor.findElement(protractor.By.css('input.large:nth-child(7)')).sendKeys('4111111111111111');
    ptor.findElement(protractor.By.css('#expiration_month > option:nth-child(3)')).click();
    ptor.findElement(protractor.By.css('#expiration_year > option:nth-child(8)')).click();
    ptor.findElement(protractor.By.css('button.waitlistButton')).click();
    ptor.sleep(3000);
    expect(ptor.findElement(protractor.By.css('h2[id="blueHeader"]')).getText()).toContain('Your payment has been approved');
    ptor.findElement(protractor.By.css('#goToMyCourses a')).click();
    ptor.sleep(3500);
/*    
    ptor.findElements(protractor.By.repeater('sc in myCourses').column('sc.Id')).then(function(arr) { // Or whatever other column is appropriate
      expect(arr.length).toEqual(1); // or whatever.
    });
*/    
    expect(ptor.findElement(protractor.By.css('.course .title a')).getAttribute('href')).toContain(courseId);
  }, 40000);
});

