var assert = require('assert');
var test = require('mocha').test;
var yaml = require('..');

var testCases = [
  {
    name: 'parse',
    args: { yaml: 'title: Hello World\ntags: [hello, world]', output: 'yaml' },
    output: { title: 'Hello World', tags: ['hello', 'world'] }
  },
  {
    name: 'parse#noargs',
    args: {},
    output: 'error'
  }
];

testCases.forEach(function(testCase) {
  test(testCase.name, function(done) {
    yaml.parse({}, testCase.args).then(function(ctx) {
      if (testCase.output !== 'error') {
        assert.equal(ctx[testCase.args.output], testCase.output);
        done();
      } else {
        done(new Error('Function should have returned an error'));
      }
    }).catch(function(ctx) {
      if (testCase.output === 'error') {
        done();
      } else {
        done(ctx.error);
      }
    });
  });
});
