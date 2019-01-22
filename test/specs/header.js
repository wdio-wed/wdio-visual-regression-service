let expect = require('chai').expect;

function expectGoodThings(results) {
  results.forEach((result, idx) => expect(result.isExactSameImage, 'Image ' + idx + ' isn\'t the same').to.be.true);
}

describe('homepage', function () {
  beforeEach(function () {
    browser.url('/');
  });

  it('should look good', function () {
    let report = browser.checkElement('.mainnav');

    expectGoodThings(report);
  });
});