var Page = require('astrolabe').Page;
var discount = require('./applyDiscountPageObject.js');

module.exports = Page.create({
/*
  enterCCInfo: { value: function(ptor) {
    ptor.findElement(protractor.By.id('cardholder_firstname')).sendKeys('Test');
    ptor.findElement(protractor.By.id('cardholder_lastname')).sendKeys('User');
    ptor.findElement(protractor.By.css('input.large:nth-child(7)')).sendKeys('4111111111111111');
    ptor.findElement(protractor.By.css('#expiration_month > option:nth-child(3)')).click();
    ptor.findElement(protractor.By.css('#expiration_year > option:nth-child(8)')).click();
    discount.applyDiscount(ptor);
    ptor.findElement(protractor.By.css('div.buttons:nth-child(12) > button:nth-child(1)')).click();
  }},
*/

  enterCCInfo: { value: function(ptor) {
    ptor.findElement(protractor.By.id('cardholder_firstname')).sendKeys('Tom');
    ptor.findElement(protractor.By.id('cardholder_lastname')).sendKeys('Lang');
    ptor.findElement(protractor.By.css('input.large:nth-child(7)')).sendKeys('4715110301971714');
    ptor.findElement(protractor.By.css('#expiration_month > option:nth-child(7)')).click();
    ptor.findElement(protractor.By.css('#expiration_year > option:nth-child(4)')).click();
    discount.applyDiscount(ptor);
    ptor.findElement(protractor.By.css('div.buttons:nth-child(12) > button:nth-child(1)')).click();
  }},


  enterCCInfoNoDiscount: { value: function(ptor) {
    ptor.findElement(protractor.By.id('cardholder_firstname')).sendKeys('Test');
    ptor.findElement(protractor.By.id('cardholder_lastname')).sendKeys('User');
    ptor.findElement(protractor.By.css('input.large:nth-child(7)')).sendKeys('4111111111111111');
    ptor.findElement(protractor.By.css('#expiration_month > option:nth-child(3)')).click();
    ptor.findElement(protractor.By.css('#expiration_year > option:nth-child(8)')).click();
    ptor.findElement(protractor.By.css('div.buttons:nth-child(12) > button:nth-child(1)')).click();
  }}
});

