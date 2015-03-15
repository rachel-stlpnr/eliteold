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
  specs: ['registerPurchaseTakeExamCourseDetails.js', 'loginPurchaseTakeExamCourseDetails.js', 'purchaseLoginTakeExamCourseDetails.js', 'purchaseRegisterTakeExamCourseDetails.js'],
  //specs: ['registerTakeExamPurchase.js', 'loginTakeExamPurchase.js', 'registerPurchaseTakeExam.js', 'loginPurchaseTakeExam.js', 'takeExamRegisterPurchase.js', 'takeExamLoginPurchase.js', 'purchaseRegisterTakeExam.js', 'purchaseLoginTakeExam.js'],
  //specs: ['registerTakeExamPurchase.js', 'loginTakeExamPurchase.js'],
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
  }
};
