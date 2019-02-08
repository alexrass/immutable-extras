const Immutable = require('immutable');
require('../');

describe('List.prototype.multiSort', () => {
  test('empty list', () => {
    const l = Immutable.List();
    expect(l.multiSort()).toEqualImmutable(Immutable.List());
  });

  test('default sort', () => {
    const l = Immutable.List.of('b', 'a', 'd', 'c');
    expect(l.multiSort()).toEqualImmutable(Immutable.List.of('a', 'b', 'c', 'd'));
  });

  test('single function passed in ', () => {
    const l = Immutable.List.of(1, 250, 21, 123);
    expect(l.multiSort((a, b) => a - b)).toEqualImmutable(Immutable.List.of(1, 21, 123, 250));
  });

  test('multiple functions passed in', () => {
    const l = Immutable.fromJS([ { a: 1, b: 5 }, { a: 1, b: 1 }, { a: 5, b: 1 }, { a: 2, b: 1 } ]);
    expect(l.multiSort(
      (a, b) => a.get('a') - b.get('a'),
      (a, b) => a.get('b') - b.get('b')
    )).toEqualImmutable(Immutable.fromJS([ { a: 1, b: 1 }, { a: 1, b: 5 }, { a: 2, b: 1 }, { a: 5, b: 1 } ]));
  });

  test('invalid sort function passed', () => {
    const l = Immutable.List.of('b', 'a', 'd', 'c');
    expect(l.multiSort(undefined)).toEqualImmutable(Immutable.List.of('b', 'a', 'd', 'c'));
  });
});
