function escapeYaml(str) {
  if (typeof str !== 'string') {
    throw new TypeError('str is required!');
  }

  return str.replace(/\n(\t+)/g, function(match, tabs){
    var result = '\n';

    for (var i = 0, len = tabs.length; i < len; i++){
      result += '  ';
    }

    return result;
  });
}

module.exports = {
  name: 'parse',

  args: {
    yaml: {
      example: 'title: Hello World\ntags: [hello, world]',
      required: true
    }
  },

  call: function(args, done, error) {
    var yaml = require('js-yaml');
    var result = yaml.load(escapeYaml(args.yaml), {});

    if (typeof result !== 'object') {
      error(new Error('YAML parsing problem.'));
    } else {
      done(result);
    }
  }
};
