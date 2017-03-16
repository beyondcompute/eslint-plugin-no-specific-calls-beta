/**
 * @fileoverview disallow calling certain functions or methods
 * @author Evgeny Kulikov
 */
'use strict';

function create(context) {
  var options = context.options[0] || [];

  return {
    CallExpression: function(node) {
      var callee = node.callee;
      options.forEach(function(option) {
        var parts = option.split('.');
        var object = parts[0];
        var method = parts[1];

        if (method) {
          var methodMatches = callee.property && callee.property.name === method;
          if (methodMatches) {
            // if no object provided: disallow method on all objects
            var objectMatches = object ? callee.object && callee.object.name === object : true;
            if (objectMatches) {
              context.report(node, 'Call of ' + object + '.' + method + '() detected');
            }
          }
        } else {
          var fn = object;
          var functionMatches = callee.name === fn && callee.type === 'Identifier';
          if (functionMatches) {
            context.report(node, 'Call of ' + fn + '() detected');
          }
        }
      });
    },
  };
};

module.exports = {
  meta: {
    docs: {
      description: 'disallow calling certain functions or methods',
      category: 'Possible Errors',
      recommended: false,
    },
    schema: [{
      type: 'array',
      minItems: 1,
      items: [
        {
          type: 'string',
          anyOf: [
            { pattern: '^[^.]+$' },
            { pattern: '^[^.]*\.[^.]+$' },
          ],
        },
      ],
    }],
  },
  create: create,
};
