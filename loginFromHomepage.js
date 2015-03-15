var login = require('./loginPageObject.js');
var selectState = require('./stateSelectPageObject.js');
var vars = require('./varsPageObject.js');
var expects = require('./expectsPageObject.js');

describe('Login from homepage', function() {
  var ptor;
  var passwd = 'tester123';
  var email;
  var time;

  ptor = protractor.getInstance();
  
  beforeEach(function () {
    ptor.driver.get(vars.homepageLocal);
    var date = new Date();
    time = date.getTime();
    email = 'testing_'+time+'@elite.com';
  });

  it('Should log in the student', function() {
    ptor.ignoreSynchronization = true;
    login.regFromHeader(ptor, email, passwd);
    ptor.sleep(1000);
    login.logoutFromHomepage(ptor);
    ptor.waitForAngular();
    //re-establish the URL
    ptor.driver.get(vars.homepageLocal);
    login.loginFromHomepage(ptor, email, passwd);
    ptor.sleep(1000);
    expects.verifyRegFromHeader(ptor, email);
    login.logoutFromHomepage(ptor);
  }, 40000);
});

