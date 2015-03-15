describe('massage homepage', function() {
  var ptor;
  var passwd = 'tester123';
  var email;
  var time;
  var courseId = 'MFL02CPI13';
  var domain = 'http://massage.local.elitecme.com';
  var domainPattern = 'http:\/\/massage\.local\.elitecme\.com';

  ptor = protractor.getInstance();
  ptor.driver.get(domain);
  
  beforeEach(function () {
    var date = new Date();
    time = date.getTime();
    email = 'testing_'+time+'@elite.com';
  });

  it('Should validate the landing page drop-down', function() {
     var stateOptions = ptor.findElements(protractor.By.css('#statesContainer select option'));
     stateOptions.then(function(options) {
       for (var i = 2; i < options.length+1; i++) {
         ptor.findElement(protractor.By.css('#statesContainer select option:nth-child('+i+')')).click();
         ptor.findElement(protractor.By.id('selStateBtn')).click();
         expect(ptor.getCurrentUrl()).toMatch(domainPattern+'\/[A-Z]{2}');
         ptor.driver.get(domain);
       }
     });
  }, 125000);
});

