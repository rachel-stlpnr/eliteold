var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

describe('massage homepage', function() {
  var ptor;

  it('should greet using binding', function() {
    //ptor = protractor.getInstance();
    //ptor.driver.get('http://massage.test.elitecme.com');
    driver.get('http://massage.test.elitecme.com');
    //driver.get('http://www.smashingmagazine.com');
    //driver.getTitle().then(function(title) {
      //expect(title).to.equal('Welcome | Massage Therapist () | Elite CME');
      //done();
    //});
   // ptor.findElement(protractor.By.name("q")).sendKeys("protractor");
    //ptor.findElement(protractor.By.name("btnK")).click();
   
    driver.wait(function() {
      return driver.getTitle().then(function(title) {
        return title === 'Welcome | Massage Therapist () | Elite CME';
      });
    }, 1000);
    
    selectElem = driver.findElement(webdriver.By.className("stateSelect"));
    selectElem.click();
    selectElem.findElement(webdriver.By.css("option[value='9']")).click();
    linkElem = driver.findElement(webdriver.By.css("#statesContainer .yellowButton"));
    linkElem.click();
    //courseElem = driver.findElement(webdriver.By.id("#add_MFL12I13"));
    //courseElem.click();
    Thread.sleep(2000);
    //driver.quit();
   }, 7000);

});
