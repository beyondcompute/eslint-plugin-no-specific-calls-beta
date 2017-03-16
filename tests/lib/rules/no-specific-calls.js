var rule = require(__dirname + '/../../../lib/rules/no-specific-calls');

var RuleTester = require('eslint').RuleTester;

var ruleTester = new RuleTester();

ruleTester.run('no-specific-calls', rule, {
  valid: [
    {
      code: 'fn("no rules provided")',
    },
    {
      code: 'fn("does not match")',
      options: [['someFunction', 'some.method']],
    },
    {
      code: 'foo.bar("method is not matched by function")',
      options: [['bar']],
    },
    {
      code: 'foo("function is not matched by method")',
      options: [['.foo']],
    },
    {
      code: 'one.foo("method of one object does not match another")',
      options: [['other.foo']],
    },
    {
      code: 'if(true) { "language construct does not match" }',
      options: [['if']],
    },
  ],
  invalid: [
    {
      code: 'fn("function matches")',
      options: [['fn']],
      errors: [{
        type: 'CallExpression',
      }],
    },
    {
      code: "foo\n         .bar(\"method matches\")",
      options: [['foo.bar']],
      errors: [{
        type: 'CallExpression',
      }],
    },
    {
      code: 'something.baz("method of any object matches")',
      options: [['.baz']],
      errors: [{
        type: 'CallExpression',
      }],
    },
  ],
});
