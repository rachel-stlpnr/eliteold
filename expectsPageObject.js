var Page = require('astrolabe').Page;

module.exports = Page.create({
  verifyRegFromHeader: { value: function(ptor, email) {
    expect(ptor.findElement(protractor.By.id('studentInfo')).getText()).toContain(email);
    expect(ptor.getCurrentUrl()).toMatch('\/student\/courses');
  }}

});

