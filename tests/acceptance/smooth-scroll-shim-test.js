import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import SmoothScroll from 'smooth-scroll';

moduleForAcceptance('Acceptance | smooth-scroll shim');

test('testing shim import', function(assert) {
  assert.ok(SmoothScroll !== undefined && SmoothScroll !== null);
  assert.equal(SmoothScroll.toString().substr(0, 30), 'function (selector, options) {');
});
