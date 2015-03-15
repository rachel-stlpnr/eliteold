// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  allScriptsTimeout: 220000,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'firefox'
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  //specs: ['takeExamLoginPurchase.js'],
  //specs: ['landingPage.js'],
  //specs: ['takeExamRegisterPurchase.js'],
  //specs: ['professionLandingPage.js'],
  //specs: ['registerTakeExamPurchase.js'],
  //specs: ['loginTakeExamPurchase.js'],
  //specs: ['purchaseRegisterTakeExam.js'],
  //specs: ['purchaseLoginTakeExam.js'],
  //specs: ['registerPurchaseTakeExam.js'],
  //specs: ['loginPurchaseTakeExam.js'],
  specs: ['registerTakeExamPurchase.js', 'registerPurchaseTakeExam.js', 'loginPurchaseTakeExam.js', 'loginTakeExamPurchase.js', 'takeExamLoginPurchase.js', 'takeExamRegisterPurchase.js', 'purchaseLoginTakeExam.js', 'purchaseRegisterTakeExam.js'],
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
  }
};
