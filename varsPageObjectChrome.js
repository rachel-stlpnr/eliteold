var Page = require('astrolabe').Page;

module.exports = Page.create({
   
  //domain: { value: 'http://cosmetology.local.elitecme.com' },
  //domainPattern: { value: 'http:\/\/cosmetology\.local\.elitecme\.com' },

  domain: { value: 'http://cosmetology.local.elitecme.com' },
  domainPattern: { value: 'http:\/\/cosmetology\.local\.elitecme\.com' },

  domainLocal: { value: 'http://cosmetology.local.elitecme.com' },
  domainPatternLocal: { value: 'http:\/\/cosmetology\.local\.elitecme\.com' },

  domainTest: { value: 'http://cosmetology.test.elitecme.com' },
  domainPatternTest: { value: 'http:\/\/cosmetology\.test\.elitecme\.com' },

  domainStage: { value: 'https://cosmetology.stage.elitecme.com' },
  domainPatternStage: { value: 'https:\/\/cosmetology\.stage\.elitecme\.com' },

  domainProd: { value: 'https://cosmetology.elitecme.com' },
  domainPatternProd: { value: 'https:\/\/cosmetology\.elitecme\.com' },

  courseId: { value: 'CGA05I14' }

});

