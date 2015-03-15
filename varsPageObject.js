var Page = require('astrolabe').Page;

module.exports = Page.create({
   
  //domain: { value: 'http://massage.local.elitecme.com' },
  //domainPattern: { value: 'http:\/\/massage\.local\.elitecme\.com' },

  //domain: { value: 'http://massage.test.elitecme.com' },
  //domainPattern: { value: 'http:\/\/massage\.test\.elitecme\.com' },

  domain: { value: 'https://massage.stage.elitecme.com' },
  domainPattern: { value: 'https:\/\/massage\.stage\.elitecme\.com' },

  //pharmDomain: { value: 'http://pharmacy.local.elitecme.com' },
  //pharmDomainPattern: { value: 'http:\/\/pharmacy\.local\.elitecme\.com' },

  pharmDomain: { value: 'http://pharmacy.test.elitecme.com' },
  pharmDomainPattern: { value: 'http:\/\/pharmacy\.test\.elitecme\.com' },

  //pharmDomain: { value: 'http://pharmacy.test.elitecme.com' },
  //pharmDomainPattern: { value: 'http:\/\/pharmacy\.test\.elitecme\.com' },

  domainLocal: { value: 'http://massage.local.elitecme.com' },
  domainPatternLocal: { value: 'http:\/\/massage\.local\.elitecme\.com' },

  domainTest: { value: 'http://massage.test.elitecme.com' },
  domainPatternTest: { value: 'http:\/\/massage\.test\.elitecme\.com' },

  domainStage: { value: 'https://massage.stage.elitecme.com' },
  domainPatternStage: { value: 'https:\/\/massage\.stage\.elitecme\.com' },

  domainProd: { value: 'https://massage.elitecme.com' },
  domainPatternProd: { value: 'https:\/\/massage\.elitecme\.com' },

  homepage: { value: 'http://www.test.elitecme.com' },

  homepageLocal: { value: 'http://www.local.elitecme.com' },

  courseId: { value: 'MFL02CPI13' },
  courseId2: { value: 'MFL02IMEI11' },
  courseIdDiscounts: { value: 'MFL02ETI13' },
  pharmCourseId: { value: 'RPFL02PSI13' },
  corpCourseId: { value: 'SWWA06ET09'}, //Corporate Account: 105509

  passwd: { value: 'tester123' },

  domainCorp: { value: 'http://www.test.elitecme.com/corporate/105509' },
  domainCorpLocal: { value: 'http://www.local.elitecme.com/corporate/105509' },
  domainCorpTest: { value: 'http://www.test.elitecme.com/corporate/105509' }
});

