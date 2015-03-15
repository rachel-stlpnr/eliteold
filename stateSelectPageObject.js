var Page = require('astrolabe').Page;

module.exports = Page.create({
  stateOptions: { value: function(stateSelectOptions, ptor, domain, pattern) {
    stateSelectOptions.then(function(options) {
      for (var i = 2; i < options.length+1; i++) {
        ptor.findElement(protractor.By.css('#statesContainer select option:nth-child('+i+')')).click();
        ptor.findElement(protractor.By.id('selStateBtn')).click();
        expect(ptor.getCurrentUrl()).toMatch(pattern+'\/[A-Z]{2}');
        ptor.driver.get(domain);
      }
    });
  }},

  selectStateFL: { value: function(ptor, pattern) {
    ptor.findElement(protractor.By.css('select option:nth-child(11)')).click();
    ptor.findElement(protractor.By.xpath('//*[@id="statesContainer"]/form/button')).click();
    expect(ptor.getCurrentUrl()).toMatch(pattern+'\/FL');
  }},

  selectStateFLPharm: { value: function(ptor, pattern) {
    ptor.findElement(protractor.By.css('select option:nth-child(10)')).click();
    ptor.findElement(protractor.By.xpath('//*[@id="statesContainer"]/form/button')).click();
    expect(ptor.getCurrentUrl()).toMatch(pattern+'\/FL');
  }},

  selectStateGACosm: { value: function(ptor, pattern) {
    ptor.findElement(protractor.By.css('select option:nth-child(3)')).click();
    ptor.findElement(protractor.By.xpath('/html/body/div/div[2]/div/div/div[2]/article/section[2]/div/div[2]/form/button')).click();
    expect(ptor.getCurrentUrl()).toMatch(pattern+'\/GA');
  }}

});

