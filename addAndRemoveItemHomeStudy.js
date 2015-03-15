var addToCart = require('./addToCartPageObject.js');
var selectState = require('./stateSelectPageObject.js');
var vars = require('./varsPageObject.js');

describe('Add and remove items from the cart', function() {
  var ptor;
  var passwd = 'tester123';
  var email;
  var time;
  var courseId = 'MFL02CPI13';

  ptor = protractor.getInstance();
  
  beforeEach(function () {
    ptor.driver.get(vars.domain);
    var date = new Date();
    time = date.getTime();
    email = 'testing_'+time+'@elite.com';
  });

  it('Should add and remove items', function() {
    selectState.selectStateFL(ptor, vars.domainPattern);
    ptor.waitForAngular();
    addToCart.addAndRemoveItemFromHomeStudy(ptor, courseId);
  }, 40000);
});

