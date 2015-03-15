var Page = require('astrolabe').Page;

module.exports = Page.create({

  enterProfile: { value: function(ptor) {
    //ptor.findElement(protractor.By.id('checkoutButton')).click();
    ptor.findElement(protractor.By.id('first_name')).sendKeys('Test');
    ptor.findElement(protractor.By.id('last_name')).sendKeys('User');
    ptor.findElement(protractor.By.id('address1')).sendKeys('842 Main St');
    ptor.findElement(protractor.By.id('address2')).sendKeys('none');
    ptor.findElement(protractor.By.id('city')).sendKeys('Redwood City');
    ptor.findElement(protractor.By.css('select option:nth-child(7)')).click();
    //ptor.findElement(protractor.By.id('zip')).sendKeys('94063');
    ptor.findElement(protractor.By.id('zip')).sendKeys('16365');
    ptor.findElement(protractor.By.id('phone')).sendKeys('555-555-5555');
    ptor.findElement(protractor.By.id('license0')).sendKeys('T123456');
    expect(ptor.findElement(protractor.By.selectedOption('profile.Licenses[0].State')).getText()).toBe('Florida');
    ptor.findElement(protractor.By.css('.buttons input[type="submit"]')).click();
  }},

  enterProfilePharm: { value: function(ptor) {
    //ptor.findElement(protractor.By.id('checkoutButton')).click();
    ptor.findElement(protractor.By.id('first_name')).sendKeys('Test');
    ptor.findElement(protractor.By.id('last_name')).sendKeys('User');
    ptor.findElement(protractor.By.id('address1')).sendKeys('842 Main St');
    ptor.findElement(protractor.By.id('address2')).sendKeys('none');
    ptor.findElement(protractor.By.id('city')).sendKeys('Redwood City');
    ptor.findElement(protractor.By.css('select option:nth-child(7)')).click();
    //ptor.findElement(protractor.By.id('zip')).sendKeys('94063');
    ptor.findElement(protractor.By.id('zip')).sendKeys('16365');
    ptor.findElement(protractor.By.id('phone')).sendKeys('555-555-5555');
    ptor.findElement(protractor.By.id('birthDate')).sendKeys('01/01/1977');
    ptor.findElement(protractor.By.id('nabp')).sendKeys('1234TEST');
    ptor.findElement(protractor.By.id('license0')).sendKeys('T123456');
    expect(ptor.findElement(protractor.By.selectedOption('profile.Licenses[0].State')).getText()).toBe('Florida');
    ptor.findElement(protractor.By.css('.buttons input[type="submit"]')).click();
  }},
 
  enterProfileGA: { value: function(ptor) {
    //ptor.findElement(protractor.By.id('checkoutButton')).click();
    ptor.findElement(protractor.By.id('first_name')).sendKeys('Test');
    ptor.findElement(protractor.By.id('last_name')).sendKeys('User');
    ptor.findElement(protractor.By.id('address1')).sendKeys('842 Main St');
    ptor.findElement(protractor.By.id('address2')).sendKeys('none');
    ptor.findElement(protractor.By.id('city')).sendKeys('Redwood City');
    ptor.findElement(protractor.By.css('select option:nth-child(7)')).click();
    ptor.findElement(protractor.By.id('zip')).sendKeys('94063');
    ptor.findElement(protractor.By.id('phone')).sendKeys('555-555-5555');
    ptor.findElement(protractor.By.id('license0')).sendKeys('T123456');
    expect(ptor.findElement(protractor.By.selectedOption('profile.Licenses[0].State')).getText()).toBe('Georgia');
    ptor.findElement(protractor.By.css('.buttons input[type="submit"]')).click();
  }},

  enterProfileMultLic: { value: function(ptor) {
    //ptor.findElement(protractor.By.id('checkoutButton')).click();
    ptor.findElement(protractor.By.id('first_name')).sendKeys('Test');
    ptor.findElement(protractor.By.id('last_name')).sendKeys('User');
    ptor.findElement(protractor.By.id('address1')).sendKeys('842 Main St');
    ptor.findElement(protractor.By.id('address2')).sendKeys('none');
    ptor.findElement(protractor.By.id('city')).sendKeys('Redwood City');
    ptor.findElement(protractor.By.css('select option:nth-child(7)')).click();
    //ptor.findElement(protractor.By.id('zip')).sendKeys('94063');
    ptor.findElement(protractor.By.id('zip')).sendKeys('16365');
    ptor.findElement(protractor.By.id('phone')).sendKeys('555-555-5555');
    ptor.findElement(protractor.By.id('license0')).sendKeys('T123456');
    expect(ptor.findElement(protractor.By.selectedOption('profile.Licenses[0].State')).getText()).toBe('Florida');
    //add additional license
    ptor.findElement(protractor.By.xpath('/html/body/div/div/div[2]/div[2]/div/article/div/form/div/a')).click();
    ptor.findElement(protractor.By.id('license1')).sendKeys('T7891011');
    ptor.findElement(protractor.By.xpath('/html/body/div/div/div[2]/div[2]/div/article/div/form/div/div[10]/div[3]/div/select/option[3]')).click();
    ptor.findElement(protractor.By.xpath('/html/body/div/div/div[2]/div[2]/div/article/div/form/div/div[10]/div[3]/div/select[2]/option[2]')).click();
    ptor.findElement(protractor.By.css('.buttons input[type="submit"]')).click();
  }},
 
  //used for corporate accounts
  enterProfile2: { value: function(ptor) {
    ptor.sleep(1500);
    ptor.findElement(protractor.By.id('first_name')).sendKeys('Test');
    ptor.findElement(protractor.By.id('last_name')).sendKeys('User');
    ptor.findElement(protractor.By.id('address1')).sendKeys('842 Main St');
    ptor.findElement(protractor.By.id('address2')).sendKeys('none');
    ptor.findElement(protractor.By.id('city')).sendKeys('Redwood City');
    ptor.findElement(protractor.By.css('select option:nth-child(7)')).click();
    ptor.findElement(protractor.By.id('zip')).sendKeys('94063');
    ptor.findElement(protractor.By.id('phone')).sendKeys('555-555-5555');
    ptor.findElement(protractor.By.id('license0')).sendKeys('T123456');
    //ptor.findElement(protractor.By.xpath("id('licenseProfession')/option[19]")).click();
    ptor.findElement(protractor.By.xpath("/html/body/div/div/div[2]/div[2]/article/div[2]/form/div/div[10]/div[2]/select/option[19]")).click();
    ptor.sleep(1500);
    ptor.findElement(protractor.By.xpath("/html/body/div/div/div[2]/div[2]/article/div[2]/form/div/div[10]/div[2]/select[2]/option[46]")).click();
    ptor.findElement(protractor.By.css('.buttons input[type="submit"]')).click();
  }}

});

