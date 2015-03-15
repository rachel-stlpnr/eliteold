var Page = require('astrolabe').Page;

module.exports = Page.create({

  applyDiscount: { value: function(ptor) {
    ptor.findElement(protractor.By.model('referralCode')).sendKeys('100');
    ptor.findElement(protractor.By.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[2]/form/button')).click();
    expect(ptor.findElement(protractor.By.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[2]/ul/li/div[2]')).getText()).toContain('$1.00');
  }},

  applyNewPriceDiscount: { value: function(ptor) {
    ptor.findElement(protractor.By.model('referralCode')).sendKeys('5dollars');
    ptor.findElement(protractor.By.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[2]/form/button')).click();
    expect(ptor.findElement(protractor.By.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[2]/ul/li/div[2]')).getText()).toMatch(/COUPON Price:\s*\$5.00/i);
  }},

  applyRegDiscount: { value: function(ptor) {
    ptor.findElement(protractor.By.model('referralCode')).sendKeys('2dollarsoff');
    ptor.findElement(protractor.By.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[2]/form/button')).click();
    expect(ptor.findElement(protractor.By.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[2]/ul/li/div[3]')).getText()).toMatch(/COUPON Price:\s*\$8.00/i);
  }},

  applyPercentageDiscount: { value: function(ptor) {
    ptor.findElement(protractor.By.model('referralCode')).sendKeys('55percentoff');
    ptor.findElement(protractor.By.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[2]/form/button')).click();
    expect(ptor.findElement(protractor.By.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[2]/div[2]/div')).getText()).toMatch(/=\s*\$4.50/);
  }}

});

