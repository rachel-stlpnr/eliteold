describe('massage homepage', function() {
  var ptor;
  ptor = protractor.getInstance();
  ptor.driver.get('http://massage.test.elitecme.com');

  it('should greet using binding', function() {
    //driver.get('http://massage.test.elitecme.com');
    //driver.get('http://www.smashingmagazine.com');
    //driver.getTitle().then(function(title) {
      //expect(title).to.equal('Welcome | Massage Therapist () | Elite CME');
      //done();
    //});
   // ptor.findElement(protractor.By.name("q")).sendKeys("protractor");
    //ptor.findElement(protractor.By.name("btnK")).click();

    ptor.findElement(protractor.By.className("stateSelect"));
    ptor.findElement(protractor.By.css('select option:nth-child(11)')).click();
    //ptor.findElement(protractor.By.css('select option:2')).click();
    ptor.findElement(protractor.By.css('button[class="yellowButton seeCoursesButton"]')).click();
    ptor.waitForAngular();
    ptor.debugger();
    expect(ptor.getCurrentUrl()).toContain('/FL');
  });
});

