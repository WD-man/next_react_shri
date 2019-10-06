module.exports = {
  baseUrl: 'http://localhost:8077',
  gridUrl: 'http://localhost:4444/wd/hub',

  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
      },
    },
  },

  compositeImage: true,

  plugins: {
    'html-reporter/hermione': {
      path: 'hermione-html-reporter',
    },
  },
};
