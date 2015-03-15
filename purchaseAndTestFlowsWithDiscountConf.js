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
  specs: ['registerTakeExamPurchase.js', 'registerPurchaseTakeExam.js', 'loginPurchaseTakeExam.js', 'loginTakeExamPurchase.js'/*, 'takeExamLoginPurchase.js', 'takeExamRegisterPurchase.js'/*, 'purchaseLoginTakeExam.js', 'purchaseRegisterTakeExam.js'*/],
  //specs: ['registerTakeExamPurchase.js', 'registerPurchaseTakeExam.js', 'loginPurchaseTakeExam.js', 'loginTakeExamPurchase.js', 'takeExamLoginPurchase.js', 'takeExamRegisterPurchase.js', 'purchaseLoginTakeExam.js', 'purchaseRegisterTakeExam.js'],
  //specs: [/*'registerTakeExamPurchase.js', 'loginTakeExamPurchase.js', 'registerPurchaseTakeExam.js', 'loginPurchaseTakeExam.js', */'takeExamRegisterPurchase.js', 'takeExamLoginPurchase.js', 'purchaseRegisterTakeExam.js', 'purchaseLoginTakeExam.js'],
  //specs: ['registerTakeExamPurchase.js', 'loginTakeExamPurchase.js'],
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
