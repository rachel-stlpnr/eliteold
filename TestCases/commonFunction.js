
var Page = require('astrolabe').Page;

module.exports = Page.create({

url: { value: 'http://www.yourwebsite.com' },

username: { get: function() { return this.findElement(this.by.name('username')); } },
password: { get: function() { return this.findElement(this.by.name('password')); } },
submit: { get: function() { return this.findElement(this.by.xpath("//button[.='Log in']")); } },
searchIdentifier: { get: function() { return this.findElement(this.by.model('search.identifier')); } },
searchName: { get: function() { return this.findElement(this.by.model('search.name')); } },
// Adds a logIn method to the page object.
logIn: { value: function(username, password) {

var page = this;

page.go();

page.username.sendKeys(username);
page.password.sendKeys(password);

page.submit.click();

} },
selectLink:{ value: function (linkName)
{
var returnedObject = "//option[contains(text(),'"+linkName+"')]";
return returnedObject;
}}
});