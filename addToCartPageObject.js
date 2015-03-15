var Page = require('astrolabe').Page;

module.exports = Page.create({

  addCourseFromDetailsPage: { value: function(ptor, courseId/* will not be used until there is better course managment for the test env*/) {
    //ptor.findElement(protractor.By.xpath('/html/body/div/div[2]/div/div/div[2]/div/article/section/table[3]/tbody/tr/td[2]/a/div/strong')).click();
    ptor.actions().mouseMove(ptor.findElement(protractor.By.id(courseId))).click().perform();
    ptor.findElement(protractor.By.id('addToCart')).click();
    ptor.findElement(protractor.By.id('checkoutButton')).click();
  }},

  //need to fix this
  addMultipleCoursesFromDetailsPage: { value: function(ptor, courseId, courseId2/* will not be used until there is better course managment for the test env*/) {
    //ptor.findElement(protractor.By.xpath('/html/body/div/div[2]/div/div/div[2]/div/article/section/table[3]/tbody/tr/td[2]/a/div/strong')).click();
    ptor.actions().mouseMove(ptor.findElement(protractor.By.id(courseId))).click().perform();
    ptor.actions().mouseMove(ptor.findElement(protractor.By.id(courseId2))).click().perform();
    ptor.findElement(protractor.By.id('addToCart')).click();
    ptor.findElement(protractor.By.id('checkoutButton')).click();
  }},

  addCourseFromHomeStudyPage: { value: function(ptor, courseId) {
    ptor.sleep(1000);
    ptor.findElement(protractor.By.id('add_'+courseId)).click();
    ptor.sleep(1000);
    ptor.findElement(protractor.By.id('checkoutButton')).click();
  }},

  addCourseFromHomeStudyPageCorp: { value: function(ptor, courseId) {
    ptor.sleep(1000);
    ptor.findElement(protractor.By.id('add_'+courseId)).click();
    ptor.sleep(1000);
    ptor.findElement(protractor.By.id('checkoutButton')).click();
  }},

  addMultipleCoursesFromHomeStudyPage: { value: function(ptor, courseId, courseId2) {
    ptor.findElement(protractor.By.id('add_'+courseId)).click();
    ptor.findElement(protractor.By.id('add_'+courseId2)).click();
    ptor.findElement(protractor.By.id('checkoutButton')).click();
  }},

  addAndRemoveItemFromHomeStudy: { value: function(ptor, courseId) {
    // got to course details page
    ptor.findElement(protractor.By.id('add_'+courseId)).click();
    // need to verify 1 item has been added - use regex for whitespace
    expect(ptor.findElement(protractor.By.xpath('/html/body/div/header/div/header/div/div/div[2]/nav/ul/li[4]/div/article/div[2]/div/table/tfoot/tr/td')).getText()).toMatch('1\\s+items');
    expect(ptor.isElementPresent(protractor.By.id('checkoutButton'))).toBeTruthy();
    // remove item
    ptor.findElement(protractor.By.id('rem_'+courseId)).click();
    // need to verify 1 item has been removed - use regex for whitespace
    expect(ptor.findElement(protractor.By.xpath('/html/body/div/header/div/header/div/div/div[2]/nav/ul/li[4]/div/article/div[2]/div/table/tfoot/tr/td')).getText()).toMatch('0\\s+items');
    expect(ptor.isElementPresent(protractor.By.id('noItems'))).toBeTruthy();
    //ptor.findElement(protractor.By.id('checkoutButton')).click();
  }},

  addAndRemoveSameItemFromHomeStudy: { value: function(ptor, courseId) {
    // got to course details page
    ptor.findElement(protractor.By.id('add_'+courseId)).click();
    // need to verify 1 item has been added - use regex for whitespace
    expect(ptor.findElement(protractor.By.xpath('/html/body/div/header/div/header/div/div/div[2]/nav/ul/li[4]/div/article/div[2]/div/table/tfoot/tr/td')).getText()).toMatch('1\\s+items');
    expect(ptor.isElementPresent(protractor.By.id('checkoutButton'))).toBeTruthy();
    // remove item
    ptor.findElement(protractor.By.id('rem_'+courseId)).click();
    // need to verify 1 item has been removed - use regex for whitespace
    expect(ptor.findElement(protractor.By.xpath('/html/body/div/header/div/header/div/div/div[2]/nav/ul/li[4]/div/article/div[2]/div/table/tfoot/tr/td')).getText()).toMatch('0\\s+items');
    expect(ptor.isElementPresent(protractor.By.id('noItems'))).toBeTruthy();
    ptor.findElement(protractor.By.id('closeButton')).click();
    // add back original item
    ptor.findElement(protractor.By.id('add_'+courseId)).click();
    expect(ptor.findElement(protractor.By.xpath('/html/body/div/header/div/header/div/div/div[2]/nav/ul/li[4]/div/article/div[2]/div/table/tfoot/tr/td')).getText()).toMatch('1\\s+items');
    expect(ptor.isElementPresent(protractor.By.id('checkoutButton'))).toBeTruthy();
    //ptor.findElement(protractor.By.id('checkoutButton')).click();
  }}
 
});

