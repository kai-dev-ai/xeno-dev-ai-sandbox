import test from 'node:test';
import assert from 'node:assert/strict';
import { sum } from './sum.js';
test('sum of [] is 0 and of [2,3] is 5 (#35)', () => {
  assert.equal(sum([]), 0);
  assert.equal(sum([2, 3]), 5);
});
