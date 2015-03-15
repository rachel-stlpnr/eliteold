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
  //specs: ['registerTakeExamPurchase.js', 'registerPurchaseTakeExam.js', 'loginPurchaseTakeExam.js', 'loginTakeExamPurchase.js', 'takeExamLoginPurchase.js', 'takeExamRegisterPurchase.js', 'purchaseLoginTakeExam.js', 'purchaseRegisterTakeExam.js'],
  specs: ['registerTakeExamPurchaseChrome.js', 'loginTakeExamPurchaseChrome.js'],
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
  }
};
