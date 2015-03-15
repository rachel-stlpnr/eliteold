// An example configuration file.
//require('jasmine-reporters');

//jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter(
//    '../reports/', true, true));

exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  allScriptsTimeout: 40000,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'firefox'
  },

  specs: ['purchaseWithCorpDiscount.js'],
  //specs: ['registerPurchaseTakeExam.js'], 
// Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
  },

  onPrepare: function() {
    // The require statement must be down here, since jasmine-reporters
    // needs jasmine to be in the global and protractor does not guarantee
    // this until inside the onPrepare function.
    require('jasmine-reporters');
    jasmine.getEnv().addReporter(
      new jasmine.JUnitXmlReporter('../reports/', true, true));
  },

};
