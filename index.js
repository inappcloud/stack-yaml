var fn = require('@inappcloud/stack').fn;
var parse = require('./src/parse');

module.exports = {
  parse: fn(parse)
};
