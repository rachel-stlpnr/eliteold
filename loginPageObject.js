var Page = require('astrolabe').Page;

module.exports = Page.create({
  regFromHeader: { value: function(ptor, email, passwd) {
    ptor.debugger();
    ptor.actions().mouseMove(ptor.findElement(protractor.By.id('login_button'))).click().perform();
    //ptor.findElement(protractor.By.css('button[class="registerNow"]')).click();
    ptor.actions().mouseMove(ptor.findElement(protractor.By.css('button[class="registerNow"]'))).click().perform();
    ptor.waitForAngular();
    ptor.findElement(protractor.By.xpath('//*[@id="login_wrapper"]/div[2]/article/div[2]/form/div[1]/input')).sendKeys(email);
    ptor.findElement(protractor.By.xpath('//*[@id="login_wrapper"]/div[2]/article/div[2]/form/div[2]/input')).sendKeys(passwd);
    ptor.findElement(protractor.By.xpath('//*[@id="login_wrapper"]/div[2]/article/div[2]/form/div[3]/input')).sendKeys(passwd);
    ptor.actions().mouseMove(ptor.findElement(protractor.By.xpath('//*[@id="login_wrapper"]/div[2]/article/div[2]/form/div[4]/input[2]'))).click().perform();
    //ptor.findElement(protractor.By.xpath('//*[@id="login_wrapper"]/div[2]/article/div[2]/form/div[4]/input[2]')).click();
  }},

  regFromHeaderCorp: { value: function(ptor, email, passwd) {
    ptor.actions().mouseMove(ptor.findElement(protractor.By.id('login_button'))).click().perform();
    ptor.findElement(protractor.By.css('button[class="registerNow"]')).click();
    ptor.waitForAngular();
    ptor.findElement(protractor.By.xpath('//*[@id="login_wrapper"]/div[2]/article/div[2]/form/div[1]/input')).sendKeys(email);
    ptor.sleep(1000);
    ptor.findElement(protractor.By.xpath('//*[@id="login_wrapper"]/div[2]/article/div[2]/form/div[2]/input')).sendKeys(passwd);
    ptor.sleep(1000);
    ptor.findElement(protractor.By.xpath('//*[@id="login_wrapper"]/div[2]/article/div[2]/form/div[3]/input')).sendKeys(passwd);
    ptor.sleep(1000);
    //ptor.findElement(protractor.By.css('input.yellowButton')).click();
    ptor.findElement(protractor.By.xpath('//*[@id="login_wrapper"]/div[2]/article/div[2]/form/div[4]/input[2]')).click();
  }},

  loginFromHeader: { value: function(ptor, email, passwd) {
    ptor.findElement(protractor.By.id('login_button')).click();
    ptor.findElement(protractor.By.xpath('//*[@id="login_wrapper"]/div[1]/article/div[2]/form/div[1]/input')).sendKeys(email);
    ptor.findElement(protractor.By.xpath('//*[@id="login_wrapper"]/div[1]/article/div[2]/form/div[2]/input')).sendKeys(passwd);
    ptor.findElement(protractor.By.xpath('//*[@id="login_wrapper"]/div[1]/article/div[2]/form/div[3]/input[2]')).click();
    ptor.waitForAngular();
  }},

  loginAfterExam: { value: function(ptor, email, passwd) { 
    ptor.findElement(protractor.By.xpath('//*[@id="courses-register-wrapper"]/article/div[1]/form/div[1]/input')).sendKeys(email);
    ptor.findElement(protractor.By.xpath('//*[@id="courses-register-wrapper"]/article/div[1]/form/div[2]/input')).sendKeys(passwd);
    ptor.findElement(protractor.By.xpath('//*[@id="courses-register-wrapper"]/article/div[1]/form/div[3]/input[2]')).click();
    ptor.findElement(protractor.By.id('examCheckoutButton')).click();
  }},

  regAfterExam: { value: function(ptor, email, passwd) {
    ptor.findElement(protractor.By.xpath('//*[@id="courses-register-wrapper"]/article/div[2]/form/div[1]/input')).sendKeys(email);
    ptor.findElement(protractor.By.xpath('//*[@id="courses-register-wrapper"]/article/div[2]/form/div[2]/input')).sendKeys(passwd);
    ptor.findElement(protractor.By.xpath('//*[@id="courses-register-wrapper"]/article/div[2]/form/div[3]/input')).sendKeys(passwd);
    ptor.findElement(protractor.By.xpath('//*[@id="courses-register-wrapper"]/article/div[2]/form/div[4]/input[2]')).click();
    ptor.debugger();
    ptor.findElement(protractor.By.id('examCheckoutButton')).click();
  }},

  loginAfterAddtoCart: { value: function(ptor, email, passwd) {
    ptor.findElement(protractor.By.xpath('//*[@id="checkout-register-wrapper"]/div[1]/form/div[1]/input')).sendKeys(email);
    ptor.findElement(protractor.By.xpath('//*[@id="checkout-register-wrapper"]/div[1]/form/div[2]/input')).sendKeys(passwd);
    ptor.findElement(protractor.By.xpath('//*[@id="checkout-register-wrapper"]/div[1]/form/div[3]/input[2]')).click();
  }},

  regAfterAddtoCart: { value: function(ptor, email, passwd) {
    ptor.findElement(protractor.By.xpath('//*[@id="checkout-register-wrapper"]/div[2]/form/div[1]/input')).sendKeys(email);
    ptor.findElement(protractor.By.xpath('//*[@id="checkout-register-wrapper"]/div[2]/form/div[2]/input')).sendKeys(passwd);
    ptor.findElement(protractor.By.xpath('//*[@id="checkout-register-wrapper"]/div[2]/form/div[3]/input')).sendKeys(passwd);
    ptor.findElement(protractor.By.xpath('//*[@id="checkout-register-wrapper"]/div[2]/form/div[4]/input[2]')).click();
  }},
 
  regAfterAddtoCartCorp: { value: function(ptor, email, passwd) {
    ptor.findElement(protractor.By.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[2]/form/div/input')).sendKeys(email);
    ptor.findElement(protractor.By.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[2]/form/div[2]/input')).sendKeys(passwd);
    ptor.findElement(protractor.By.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[2]/form/div[3]/input')).sendKeys(passwd);
    ptor.findElement(protractor.By.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[2]/form/div[4]/input[2]')).click();
  }},

  logoutAfterReg: { value: function(ptor, domain) {
    ptor.findElement(protractor.By.id('login_wrapper')).click();
    expect(ptor.getCurrentUrl()).toBe(domain+'/USA/student/logout');
  }},

  logoutAfterPurchase: { value: function(ptor) {
    ptor.findElement(protractor.By.xpath('/html/body/div/div/div/div/div/div[2]/div/ul/li[5]/a')).click();
    ptor.sleep(2000);
    expect(ptor.getCurrentUrl()).toMatch('\/student\/logout');
  }},

  logout: { value: function(ptor) {
    ptor.findElement(protractor.By.xpath('//*[@id="login_wrapper"]/a')).click();
    ptor.sleep(2000);
    expect(ptor.getCurrentUrl()).toMatch('\/student\/logout');
  }},
 
  logoutCorp: { value: function(ptor) {
    ptor.findElement(protractor.By.xpath('//*[@id="login_wrapper"]/a')).click();
  }},

  regFromHomepage: { value: function(ptor, email, passwd) {
    ptor.findElement(protractor.By.id('login_button')).click();
    ptor.findElement(protractor.By.css('button[class="registerNow"]')).click();
    ptor.waitForAngular();
    ptor.findElement(protractor.By.xpath('/html/body/div/header/div/header/div/div/div[2]/nav/ul/li[5]/div[2]/article/div[2]/form/div/input')).sendKeys(email);
    ptor.findElement(protractor.By.xpath('/html/body/div/header/div/header/div/div/div[2]/nav/ul/li[5]/div[2]/article/div[2]/form/div[2]/input')).sendKeys(passwd);
    ptor.findElement(protractor.By.xpath('/html/body/div/header/div/header/div/div/div[2]/nav/ul/li[5]/div[2]/article/div[2]/form/div[3]/input')).sendKeys(passwd);
    ptor.findElement(protractor.By.xpath('/html/body/div/header/div/header/div/div/div[2]/nav/ul/li[5]/div[2]/article/div[2]/form/div[4]/input[2]')).click();
  }},

  loginFromHomepage: { value: function(ptor, email, passwd) {
    ptor.findElement(protractor.By.id('login_button')).click();
    ptor.findElement(protractor.By.xpath('/html/body/div/header/div/header/div/div/div[2]/nav/ul/li[5]/div/article/div[2]/form/div/input')).sendKeys(email);
    ptor.findElement(protractor.By.xpath('/html/body/div/header/div/header/div/div/div[2]/nav/ul/li[5]/div/article/div[2]/form/div[2]/input')).sendKeys(passwd);
    ptor.findElement(protractor.By.xpath('/html/body/div/header/div/header/div/div/div[2]/nav/ul/li[5]/div/article/div[2]/form/div[3]/input[2]')).click();
    ptor.waitForAngular();
  }},

  logoutFromHomepage: { value: function(ptor) {
    ptor.findElement(protractor.By.xpath('/html/body/div/header/div/header/div/div/div[2]/nav/ul/li[5]/a')).click();
    ptor.sleep(2000);
    expect(ptor.getCurrentUrl()).toMatch('\/student\/logout');
  }}

});

