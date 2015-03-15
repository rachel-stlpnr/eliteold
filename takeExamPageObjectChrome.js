var Page = require('astrolabe').Page;

module.exports = Page.create({

  takeExam: { value: function(ptor, domain, courseId) {
    // finds the course on the home study page
    ptor.findElement(protractor.By.id(courseId)).click();
    ptor.findElement(protractor.By.id('confirm')).click();
    ptor.waitForAngular();
    ptor.findElement(protractor.By.id('q01_T')).click();
    ptor.findElement(protractor.By.id('confirm')).click();
    ptor.waitForAngular();
    ptor.sleep(1000);
    expect(ptor.findElement(protractor.By.id('congrats')).getText()).toContain("Congratulations! You've passed with a score of 100%");
    ptor.findElement(protractor.By.id('saveScore')).click();
  }},

  takeExamGeneric: { value: function(ptor, domain, courseId, purchased, loggedIn, from) {
    purchased = (typeof purchased === 'undefined') ? false : purchased;
    loggedIn = (typeof loggedIn === 'undefined') ? false : loggedIn;
    from = (typeof from === 'undefined') ? 'details' : from;

    if (from == 'test') {
      ptor.findElement(protractor.By.id('takeATest')).click();
      ptor.findElement(protractor.By.id(courseId)).click();
    } else if (from == 'myCourses') {
      ptor.findElement(protractor.By.id('exam_'+courseId)).click();
      ptor.sleep(2000);
      expect(ptor.getCurrentUrl()).toContain(courseId);
    } else { // course details is the default location
      ptor.findElement(protractor.By.id(courseId)).click();
      ptor.findElement(protractor.By.id('confirm')).click();
    }

    ptor.waitForAngular();
    ptor.actions().click(ptor.findElement(protractor.By.id('q01_T'))).perform();
    //ptor.findElement(protractor.By.id('q01_T')).click();
    ptor.findElement(protractor.By.id('confirm')).click();
    expect(ptor.findElement(protractor.By.id('congrats')).getText()).toContain("Congratulations! You've passed with a score of 100%");
    if (loggedIn == true && purchased == true) {
      ptor.findElement(protractor.By.id('myCoursesButton')).click();
    } else if (loggedIn == false ) {
      ptor.findElement(protractor.By.id('saveScore')).click();
    } else {
      ptor.findElement(protractor.By.id('examCheckoutButton')).click();
    }

  }},

  takeExamLoggedIn: { value: function(ptor, domain, courseId) {
    // finds the course on the home study page
    ptor.findElement(protractor.By.id(courseId)).click();
    ptor.findElement(protractor.By.id('confirm')).click();
    ptor.waitForAngular();
    ptor.findElement(protractor.By.id('q01_T')).click();
    ptor.findElement(protractor.By.id('confirm')).click();
    ptor.waitForAngular();
    ptor.sleep(1000);
    expect(ptor.findElement(protractor.By.id('congrats')).getText()).toContain("Congratulations! You've passed with a score of 100%");
    ptor.findElement(protractor.By.id('checkoutButton')).click();

  }},

  takeExamFromMyCourses: { value: function(ptor, courseId) {
    ptor.sleep(2000);
    ptor.findElement(protractor.By.id('exam_'+courseId)).click();
    ptor.sleep(2000);
    expect(ptor.getCurrentUrl()).toContain(courseId);
    ptor.findElement(protractor.By.id('q01_T')).click();
    ptor.waitForAngular();
    ptor.sleep(1000);
    ptor.findElement(protractor.By.id('confirm')).click();
    expect(ptor.findElement(protractor.By.id('congrats')).getText()).toContain("Congratulations! You've passed with a score of 100%");
    ptor.findElement(protractor.By.id('myCoursesButton')).click();
    // looks for the certificate icon
    expect(ptor.isElementPresent(protractor.By.xpath('/html/body/div/div[2]/div/div/div[2]/article/table/tbody/tr/td[3]/div/a/img'))).toBeTruthy();
  }},

  takeExamTakeATestLink: { value: function(ptor, domain, courseId) {
    ptor.findElement(protractor.By.id('takeATest')).click();
    ptor.findElement(protractor.By.id(courseId)).click();
    ptor.waitForAngular();
    ptor.findElement(protractor.By.id('q01_T')).click();
    ptor.findElement(protractor.By.id('confirm')).click();
    ptor.waitForAngular();
    ptor.sleep(1000);
    expect(ptor.findElement(protractor.By.id('congrats')).getText()).toContain("Congratulations! You've passed with a score of 100%");
    ptor.debugger();
    ptor.findElement(protractor.By.id('saveScore')).click();
  }},

  takeExamTakeATestLinkLoggedIn: { value: function(ptor, domain, courseId) {
    ptor.findElement(protractor.By.id('takeATest')).click();
    ptor.findElement(protractor.By.id(courseId)).click();
    ptor.waitForAngular();
    ptor.findElement(protractor.By.id('q01_T')).click();
    ptor.findElement(protractor.By.id('confirm')).click();
    ptor.waitForAngular();
    ptor.sleep(1000);
    expect(ptor.findElement(protractor.By.id('congrats')).getText()).toContain("Congratulations! You've passed with a score of 100%");
    ptor.findElement(protractor.By.id('checkoutButton')).click();
  }}, 

  takeExamTakeATestLinkLoggedInPurchased: { value: function(ptor, domain, courseId) {
    ptor.findElement(protractor.By.id('takeATest')).click();
    ptor.findElement(protractor.By.id(courseId)).click();
    ptor.waitForAngular();
    ptor.findElement(protractor.By.id('q01_T')).click();
    ptor.findElement(protractor.By.id('confirm')).click();
    ptor.waitForAngular();
    ptor.sleep(1000);
    expect(ptor.findElement(protractor.By.id('congrats')).getText()).toContain("Congratulations! You've passed with a score of 100%");
    ptor.findElement(protractor.By.id('myCoursesButton')).click();
  }}
    
});

