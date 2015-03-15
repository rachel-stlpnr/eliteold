
describe('MyMcKissock Profile Page', function() {
  var ptor;
  var passwd = 'tester123';
  var email;
  var time;
  var purchased = false;
  var loggedIn = true;
  var domain = "http://massage.test.elitecme.com";

  ptor = protractor.getInstance();
  
  beforeEach(function () {
    var date = new Date();
    time = date.getTime();
    email = 'testing_'+time+'@elite.com';
  });

  it('Should test MyMcKissock profile page', function() {
    ptor.driver.get(domain);
    ptor.waitForAngular();
	ptor.driver.findElement(protractor.By.id("login_button")).click();
	ptor.driver.findElement(protractor.By.xpath("/html/body/div/div/div/div/div/div[2]/div/ul/li[5]/div/article/div[2]/form/div/input")).sendKeys("drew.dimanlig+007@gmail.com");
	ptor.driver.findElement(protractor.By.xpath("/html/body/div/div/div/div/div/div[2]/div/ul/li[5]/div/article/div[2]/form/div[2]/input")).sendKeys("lavasoft");
	ptor.driver.findElement(protractor.By.xpath("/html/body/div/div/div/div/div/div[2]/div/ul/li[5]/div/article/div[2]/form/div[3]/input[2]")).click();
    ptor.waitForAngular();
    ptor.findElement(protractor.By.id("studentInfo")).click();
	ptor.findElement(protractor.By.css("ul.dropdown-menu:nth-child(3) > li:nth-child(3) > a:nth-child(1)")).click();
	//expect(ptor.findElement(protractor.By.model("profile.FirstName")).getAttribute("value")).toContain("Drew");
	expect(ptor.findElement(protractor.By.css("input[ng-model='profile.FirstName']")).getAttribute("value")).toContain("Drew");
  }, 40000);
});

