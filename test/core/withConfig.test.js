var assert = require('assert');
var math = require('../../index');

describe('withConfig', function() {

  it('should execute a code block with temporary config', function () {
    var isExecuted = false;
    assert.strictEqual(math.eval('0.4'), 0.4);

    math.withConfig({number: 'fraction'}, function () {
      isExecuted = true;
      assert.deepEqual(math.eval('0.4'), math.fraction(0.4));
    });
    assert.ok(isExecuted, 'should have executed the code block synchronously');

    // should have restored the original config
    assert.strictEqual(math.eval('0.4'), 0.4);
  })
});