// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  allScriptsTimeout: 40000,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['registerTakeExamPurchaseChrome.js'/*, 'registerPurchaseTakeExamChrome.js', 'loginPurchaseTakeExamChrome.js', 'loginTakeExamPurchaseChrome.js', 'takeExamLoginPurchaseChrome.js', 'takeExamRegisterPurchaseChrome.js', 'purchaseLoginTakeExamChrome.js', 'purchaseRegisterTakeExamChrome.js'*/],
  //specs: ['registerTakeExamPurchaseChrome.js', 'loginTakeExamPurchaseChrome.js', 'registerPurchaseTakeExamChrome.js', 'loginPurchaseTakeExamChrome.js', 'takeExamRegisterPurchaseChrome.js', 'takeExamLoginPurchaseChrome.js', 'purchaseRegisterTakeExamChrome.js', 'purchaseLoginTakeExamChrome.js'],
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
