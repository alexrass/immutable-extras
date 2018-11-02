const Immutable = require('immutable');
require('../');


describe('List.prototype.group', () => {
  test('empty list', () => {
    const l = Immutable.List();
    expect(l.group(5)).toEqualImmutable(Immutable.List());
  });

  test('list with fewer items than group size', () => {
    const l = Immutable.Range(0, 3).toList();
    expect(l.group(5)).toEqualImmutable(Immutable.fromJS([ [ 0, 1, 2 ] ]));
  });

  test('list with more items than group size', () => {
    const l = Immutable.Range(0, 20).toList();
    expect(l.group(5)).toEqualImmutable(Immutable.fromJS([
      [ 0, 1, 2, 3, 4 ],
      [ 5, 6, 7, 8, 9 ],
      [ 10, 11, 12, 13, 14 ],
      [ 15, 16, 17, 18, 19 ],
    ]));
  });
});
