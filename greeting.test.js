import { test } from 'node:test';
import assert from 'node:assert/strict';
import { greeting } from './greeting.js';

test('greets the supplied name without surrounding whitespace', () => {
  assert.equal(greeting('  Kai  '), 'Hello, Kai!');
});

test('greets without a name when input is blank', () => {
  assert.equal(greeting('   '), 'Hello!');
});
