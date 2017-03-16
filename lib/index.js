/**
 * @fileoverview disallow calling certain functions or methods
 * @author Evgeny Kulikov
 */
'use strict';

module.exports.rules = {
  'no-specific-calls': require(__dirname + '/rules/no-specific-calls'),
};
