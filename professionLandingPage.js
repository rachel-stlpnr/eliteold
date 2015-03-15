var selectBoxPage = require('./stateSelectPageObject.js');
var domain = 'http://massage.local.elitecme.com';
var pattern = 'http:\/\/massage\.local\.elitecme\.com';
describe('massage homepage', function() {
  var ptor = protractor.getInstance();
  ptor.driver.get(domain);

  it('Should validate the landing page drop-down', function() {
    var stateOptions = ptor.findElements(protractor.By.css('#statesContainer select option'));
    selectBoxPage.stateOptions(stateOptions, ptor, domain, pattern);
  }, 125000);
});

