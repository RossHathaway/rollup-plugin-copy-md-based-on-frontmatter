const assert = require('assert');
const rollupStarterPlugin = require('../src/index.js');

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });

    it('testing if tests are working', function () {
      assert.strictEqual(rollupStarterPlugin().name, 'starter-plugin');
    });
  });
});
