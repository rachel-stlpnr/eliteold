var login = require('./loginPageObject.js');
var selectState = require('./stateSelectPageObject.js');
var vars = require('./varsPageObject.js');
var expects = require('./expectsPageObject.js');

describe('Login from profession landing page', function() {
  var ptor;
  var passwd = 'tester123';
  var email;
  var time;

  ptor = protractor.getInstance();
  
  beforeEach(function () {
    ptor.driver.get(vars.domain);
    var date = new Date();
    time = date.getTime();
    email = 'testing_'+time+'@elite.com';
  });

  it('Should login the student', function() {
    login.regFromHeader(ptor, email, passwd);
    expect(ptor.getCurrentUrl()).toBe(vars.domain+'/USA/student/courses');
    login.logout(ptor);
    ptor.waitForAngular();
    //re-establish the URL
    ptor.driver.get(vars.domain);
    selectState.selectStateFL(ptor, vars.domainPattern);
    login.loginFromHeader(ptor, email, passwd);
    expects.verifyRegFromHeader(ptor, email);
    login.logout(ptor);
  }, 40000);
});

