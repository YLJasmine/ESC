const sum = require('./sum');

test('sums numbers', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(2, 2)).toEqual(4);
});
