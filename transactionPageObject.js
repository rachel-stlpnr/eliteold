var Page = require('astrolabe').Page;

module.exports = Page.create({

  verifyTransaction: { value: function(ptor, courseId) {
    ptor.sleep(3000);
    expect(ptor.findElement(protractor.By.css('.blueHeader')).getText()).toContain('Your payment has been approved');
    ptor.findElement(protractor.By.css('#goToMyCourses a')).click();
    ptor.sleep(3000);
    expect(ptor.findElement(protractor.By.css('.course .title a')).getAttribute('href')).toContain(courseId);
  }}

});

