module.exports = {
  'Test ya.ru': function(browser) {
    const firstResultSelector = '.serp-list .organic__subtitle b';

    browser
      .url('http://ya.ru')
      .waitForElementVisible('#text', 5000)
      .setValue('input[name="text"]', 'habrahabr')
      .submitForm('form')
      .waitForElementVisible(firstResultSelector, 5000)
      .getText(firstResultSelector, result => {
        browser.assert.equal(result.value, 'habr.com');
      })
      .end();
  }
};