var tinytext = require('./lib/tiny');

module.exports = function(text) {
  return text.split('').map(function(a) {
    return tinytext.hasOwnProperty(a) ? tinytext[a] : a;
  }).join('');
};