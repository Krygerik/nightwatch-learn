const elements = require('../data/elements.json');

module.exports = {
    'Проверка кнопки "Мне повезет!"': function (browser) {
        browser
            .url(elements.standUrl)
            .waitForElementVisible(elements.inputGoogleSearch, 10000, 'Кнопка "Мне повезет!" видна')
            .setValue(elements.inputGoogleSearch, ['Nightwatchjs', browser.Keys.ENTER])
            .waitForElementVisible('.bkWMgd:first-child .g:first-child h3', 5000)
            .pause(2000)
            .elements('css selector', '.bkWMgd:first-child .g h3', function(allHeaders) {
                console.log("allHeaders:", allHeaders);
                allHeaders.value.forEach(element => {
                    browser.elementIdText(element.ELEMENT, function(text) {
                        browser.verify.equal(text.value, "Как настроить простую систему автотестов без Java и Selenium ...", 'Совпадает!')
                    })
                });
            })
            .pause()
    }, 

    'after': function (browser) {
        browser.end()
    }
}
