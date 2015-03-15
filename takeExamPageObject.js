var Page = require('astrolabe').Page;
var exam = require('./takeExamPageObject.js');

module.exports = Page.create({

  takeExam: { value: function(ptor, domain, courseId) {
    /*
     need to add id to course title
    */
    // finds the course on the home study page
    //ptor.findElement(protractor.By.xpath('/html/body/div/div[2]/div/div/div[2]/div/article/section/table[3]/tbody/tr/td[2]/a')).click();
    ptor.findElement(protractor.By.id(courseId)).click();
    ptor.findElement(protractor.By.id('beginTest')).click();
    ptor.waitForAngular();
    ptor.findElement(protractor.By.id('q01_D')).click();
    ptor.findElement(protractor.By.id('q02_C')).click();
    ptor.findElement(protractor.By.id('q03_D')).click();
    ptor.findElement(protractor.By.id('q04_C')).click();
    ptor.findElement(protractor.By.id('q05_C')).click();
    ptor.findElement(protractor.By.id('submitAnswers')).click();
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
      ptor.actions().mouseMove(ptor.findElement(protractor.By.id(courseId))).click().perform();
      ptor.findElement(protractor.By.id('beginTest')).click();
    }

    ptor.waitForAngular();
    ptor.actions().click(ptor.findElement(protractor.By.id('q01_D'))).perform();
    ptor.actions().click(ptor.findElement(protractor.By.id('q02_C'))).perform();
    ptor.actions().click(ptor.findElement(protractor.By.id('q03_D'))).perform();
    ptor.actions().click(ptor.findElement(protractor.By.id('q04_C'))).perform();
    ptor.actions().click(ptor.findElement(protractor.By.id('q05_C'))).perform();
    ptor.findElement(protractor.By.id('submitAnswers')).click();
    expect(ptor.findElement(protractor.By.id('congrats')).getText()).toContain("Congratulations! You've passed with a score of 100%");
    
    if (loggedIn == true && purchased == true) {
      ptor.findElement(protractor.By.id('myCoursesButton')).click();
    } else if (loggedIn == false ) {
      ptor.findElement(protractor.By.id('saveScore')).click();
    } else {
      ptor.findElement(protractor.By.id('examCheckoutButton')).click();
    }

  }},

  passExam: { value: function(ptor) {
    ptor.waitForAngular();
    ptor.actions().click(ptor.findElement(protractor.By.id('q01_D'))).perform();
    ptor.actions().click(ptor.findElement(protractor.By.id('q02_C'))).perform();
    ptor.actions().click(ptor.findElement(protractor.By.id('q03_D'))).perform();
    ptor.actions().click(ptor.findElement(protractor.By.id('q04_C'))).perform();
    ptor.actions().click(ptor.findElement(protractor.By.id('q05_C'))).perform();
    ptor.findElement(protractor.By.id('submitAnswers')).click();
  }},

  failExam: { value: function(ptor) {
    ptor.waitForAngular();
    ptor.actions().click(ptor.findElement(protractor.By.id('q01_D'))).perform();
    ptor.actions().click(ptor.findElement(protractor.By.id('q02_C'))).perform();
    ptor.actions().click(ptor.findElement(protractor.By.id('q03_A'))).perform();
    ptor.actions().click(ptor.findElement(protractor.By.id('q04_A'))).perform();
    ptor.actions().click(ptor.findElement(protractor.By.id('q05_A'))).perform();
    ptor.findElement(protractor.By.id('submitAnswers')).click();
  }},

  retakeExamGeneric: { value: function(ptor, domain, courseId, purchased, loggedIn, from) {
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
      ptor.actions().mouseMove(ptor.findElement(protractor.By.id(courseId))).click().perform();
      ptor.findElement(protractor.By.id('beginTest')).click();
    }

    //exam.failExam(ptor);
    ptor.waitForAngular();
    ptor.actions().click(ptor.findElement(protractor.By.id('q01_D'))).perform();
    ptor.actions().click(ptor.findElement(protractor.By.id('q02_C'))).perform();
    ptor.actions().click(ptor.findElement(protractor.By.id('q03_A'))).perform();
    ptor.actions().click(ptor.findElement(protractor.By.id('q04_A'))).perform();
    ptor.actions().click(ptor.findElement(protractor.By.id('q05_A'))).perform();
    ptor.findElement(protractor.By.id('submitAnswers')).click();

    //need to add an id for the re-take btn
    ptor.findElement(protractor.By.xpath('/html/body/div/div/div[2]/div[2]/ng-include[2]/article/footer/a[2]')).click();
    //exam.passExam(ptor);
    ptor.waitForAngular();
    ptor.actions().click(ptor.findElement(protractor.By.id('q01_D'))).perform();
    ptor.actions().click(ptor.findElement(protractor.By.id('q02_C'))).perform();
    ptor.actions().click(ptor.findElement(protractor.By.id('q03_D'))).perform();
    ptor.actions().click(ptor.findElement(protractor.By.id('q04_C'))).perform();
    ptor.actions().click(ptor.findElement(protractor.By.id('q05_C'))).perform();
    ptor.findElement(protractor.By.id('submitAnswers')).click();

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
    ptor.findElement(protractor.By.xpath('/html/body/div/div[2]/div/div/div[2]/div/article/section/table[3]/tbody/tr/td[2]/a')).click();
    ptor.findElement(protractor.By.id('beginTest')).click();
    ptor.waitForAngular();
    ptor.findElement(protractor.By.id('q01_D')).click();
    ptor.findElement(protractor.By.id('q02_C')).click();
    ptor.findElement(protractor.By.id('q03_D')).click();
    ptor.findElement(protractor.By.id('q04_C')).click();
    ptor.findElement(protractor.By.id('q05_C')).click();
    ptor.findElement(protractor.By.id('submitAnswers')).click();
    expect(ptor.findElement(protractor.By.id('congrats')).getText()).toContain("Congratulations! You've passed with a score of 100%");
    ptor.findElement(protractor.By.id('examCheckoutButton')).click();

  }},

  takeExamFromMyCourses: { value: function(ptor, courseId) {
    ptor.sleep(2000);
    ptor.findElement(protractor.By.id('exam_'+courseId)).click();
    ptor.sleep(2000);
    expect(ptor.getCurrentUrl()).toContain(courseId);
    ptor.findElement(protractor.By.id('q01_D')).click();
    ptor.findElement(protractor.By.id('q02_C')).click();
    ptor.findElement(protractor.By.id('q03_D')).click();
    ptor.findElement(protractor.By.id('q04_C')).click();
    ptor.findElement(protractor.By.id('q05_C')).click();
    ptor.findElement(protractor.By.id('submitAnswers')).click();
    expect(ptor.findElement(protractor.By.id('congrats')).getText()).toContain("Congratulations! You've passed with a score of 100%");
    ptor.findElement(protractor.By.id('myCoursesButton')).click();
    // looks for the certificate icon
    expect(ptor.isElementPresent(protractor.By.xpath('/html/body/div/div[2]/div/div/div[2]/article/table/tbody/tr/td[3]/div/a/img'))).toBeTruthy();
  }},

  takeExamTakeATestLink: { value: function(ptor, domain, courseId) {
    // finds the course on the home study page
    ptor.findElement(protractor.By.id('takeATest')).click();
    ptor.findElement(protractor.By.id(courseId)).click();
    ptor.waitForAngular();
    ptor.findElement(protractor.By.id('q01_D')).click();
    ptor.findElement(protractor.By.id('q02_C')).click();
    ptor.findElement(protractor.By.id('q03_D')).click();
    ptor.findElement(protractor.By.id('q04_C')).click();
    ptor.findElement(protractor.By.id('q05_C')).click();
    ptor.findElement(protractor.By.id('submitAnswers')).click();
    expect(ptor.findElement(protractor.By.id('congrats')).getText()).toContain("Congratulations! You've passed with a score of 100%");
    ptor.findElement(protractor.By.id('saveScore')).click();
  }},

  takeExamTakeATestLinkLoggedIn: { value: function(ptor, domain, courseId) {
    // finds the course on the home study page
    ptor.findElement(protractor.By.id('takeATest')).click();
    ptor.findElement(protractor.By.id(courseId)).click();
    ptor.waitForAngular();
    ptor.findElement(protractor.By.id('q01_D')).click();
    ptor.findElement(protractor.By.id('q02_C')).click();
    ptor.findElement(protractor.By.id('q03_D')).click();
    ptor.findElement(protractor.By.id('q04_C')).click();
    ptor.findElement(protractor.By.id('q05_C')).click();
    ptor.findElement(protractor.By.id('submitAnswers')).click();
    expect(ptor.findElement(protractor.By.id('congrats')).getText()).toContain("Congratulations! You've passed with a score of 100%");
    ptor.findElement(protractor.By.id('examCheckoutButton')).click();
  }},

  takeExamTakeATestLinkLoggedInPurchased: { value: function(ptor, domain, courseId) {
    // finds the course on the home study page
    ptor.findElement(protractor.By.id('takeATest')).click();
    ptor.findElement(protractor.By.id(courseId)).click();
    ptor.waitForAngular();
    ptor.findElement(protractor.By.id('q01_D')).click();
    ptor.findElement(protractor.By.id('q02_C')).click();
    ptor.findElement(protractor.By.id('q03_D')).click();
    ptor.findElement(protractor.By.id('q04_C')).click();
    ptor.findElement(protractor.By.id('q05_C')).click();
    ptor.findElement(protractor.By.id('submitAnswers')).click();
    expect(ptor.findElement(protractor.By.id('congrats')).getText()).toContain("Congratulations! You've passed with a score of 100%");
    ptor.findElement(protractor.By.id('myCoursesButton')).click();
  }}
    
});

