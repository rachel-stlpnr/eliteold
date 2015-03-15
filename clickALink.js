describe('When the username and password is entered', function() {
var cf = require('./commonFunction');
it('The user should be logged in', function() {
cf.logIn('username','password'); // username and password values
},30000);
it('Element should be displayed', function() {
expect(element(by.xpath("//a[contains(text(),'Element')]")).isPresent()).toBe(true);
},30000);
it('the user will be able to click on the link', function() {
cf.searchIdentifier.sendKeys("001445343");
element(by.xpath(cf.selectLink('LINK'))).click(); // Link value
cf.searchName.sendKeys("NAME"); // Name value
},30000);
});