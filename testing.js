
describe('MyMcKissock Profile Page', function() {
  var ptor;
  var passwd = 'tester123';
  var email;
  var time;
  var purchased = false;
  var loggedIn = true;
  var domain = "http://massage.test.elitecme.com/FL";
  var courseId = "MFL02CPI13";

  ptor = protractor.getInstance();
  
  beforeEach(function () {
    var date = new Date();
    time = date.getTime();
    email = 'testing_'+time+'@elite.com';
  });

  it('Should test MyMcKissock profile page', function() {
    ptor.driver.get(domain);
    ptor.driver.findElement(protractor.By.id("login_button")).click();
    ptor.debugger();
    ptor.waitForAngular();
    ptor.driver.findElement(protractor.By.xpath('//*[@id="login_wrapper"]/div[1]/article/div[2]/form/div[1]/input')).sendKeys("drew.dimanlig+007@gmail.com");
    ptor.driver.findElement(protractor.By.xpath('//*[@id="login_wrapper"]/div[1]/article/div[2]/form/div[2]/input')).sendKeys("lavasoft");
        ptor.driver.findElement(protractor.By.xpath('//*[@id="login_wrapper"]/div[1]/article/div[2]/form/div[3]/input[2]')).click();
    ptor.findElement(protractor.By.id("homeStudy")).click();
    ptor.debugger();
    //ptor.sleep(3000);
    ptor.actions().mouseMove(ptor.findElement(protractor.By.id(courseId)));
    ptor.debugger()
  }, 40000);
});

