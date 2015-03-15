var login = require('./loginPageObject.js');
var selectState = require('./stateSelectPageObject.js');
var vars = require('./varsPageObject.js');
var expects = require('./expectsPageObject.js');

describe('Register from profession landing page', function() {
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

  it('Should register the student', function() {
    selectState.selectStateFL(ptor, vars.domainPattern);
    login.regFromHeader(ptor, email, passwd);
    expects.verifyRegFromHeader(ptor, email);
    login.logout(ptor);
  }, 40000);
});

