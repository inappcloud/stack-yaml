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

require('@inappcloud/stack-test').runTests(require('..').parse, testCases);
