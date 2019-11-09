var chromedriver = require('chromedriver');

args = [
    // optional arguments
];

module.exports = {
    before: function (done) {
        chromedriver.start();

        done();
    },

    after: function (done) {
        chromedriver.stop();

        done();
    }
};