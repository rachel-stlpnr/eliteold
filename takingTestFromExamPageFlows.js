// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  allScriptsTimeout: 40000,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'firefox'
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  //specs: ['registerTakeExamPurchase.js', 'registerPurchaseTakeExam.js', 'loginPurchaseTakeExam.js', 'loginTakeExamPurchase.js', 'takeExamLoginPurchase.js', 'takeExamRegisterPurchase.js', 'purchaseLoginTakeExam.js', 'purchaseRegisterTakeExam.js'],
  //specs: ['registerTakeExamPurchase.js', 'loginTakeExamPurchase.js', 'registerPurchaseTakeExam.js', 'loginPurchaseTakeExam.js', 'takeExamRegisterPurchase.js', 'takeExamLoginPurchase.js', 'purchaseRegisterTakeExam.js', 'purchaseLoginTakeExam.js'],
  //specs: ['registerTakeExamPurchase.js', 'loginTakeExamPurchase.js', 'registerPurchaseTakeExam.js', 'loginPurchaseTakeExam.js', 'takeExamRegisterPurchase.js', 'takeExamLoginPurchase.js', 'purchaseRegisterTakeExam.js', 'purchaseLoginTakeExam.js'],
  specs: ['loginPurchaseTakeExamExamPage.js', 'loginTakeExamPurchaseExamPage.js', 'purchaseLoginTakeExamExamPage.js', 'purchaseRegisterTakeExamExamPage.js', 'registerPurchaseTakeExamExamPage.js', 'registerTakeExamPurchaseExamPage.js', 'takeExamLoginPurchaseExamPage.js', 'takeExamRegisterPurchaseExamPage.js'],
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
  }
};
