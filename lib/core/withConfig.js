'use strict';

var object = require('../utils/object');

function factory (type, config, load, typed) {
  var _config = load(require('./config'));

  /**
   * Execute a block of code with specific configuration without creating
   * a new instance of math.js (which is expensive).
   *
   * Syntax:
   *
   *     withConfig(config, callback)
   *
   * Examples:
   *
   *     console.log(math.format(math.eval('0.4')));        //  number 0.4
   *     math.withConfig({number: 'fraction'}, function () {
   *       // code inside this callback is executed with temporary config
   *       console.log(math.format(math.eval('0.4')));      //  number 2/5
   *     });
   *     console.log(math.format(math.eval('0.4')));        //  number 0.4
   *
   * See also:
   *     config
   *
   * @param {Object} config     Object with configuration
   * @param {function} callback Function containing the code block to be
   *                            executed.
   */
  return typed('withConfig', {
    'Object, function': function (config, callback) {
      var old = _config();  // get configuration
      _config(config);      // apply new configuration
      callback();           // execute the functions
      _config(old);         // restore configuration
    }
  });

}

exports.name = 'withConfig';
exports.factory = factory;
