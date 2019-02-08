const Immutable = require('immutable');
require('../');

describe('List.prototype.unique', () => {
  test('empty list', () => {
    const l = Immutable.List();
    expect(l.unique()).toEqualImmutable(Immutable.List());
  });

  test('list with no duplicates', () => {
    const l = Immutable.List.of(1, 2, 3, 4);
    expect(l.unique()).toEqualImmutable(Immutable.List.of(1, 2, 3, 4));
  });

  test('list with duplicate simple nodes', () => {
    const l = Immutable.List.of(1, 2, 3, 1, 2, 4, '1', '2');
    expect(l.unique()).toEqualImmutable(Immutable.List.of(1, 2, 3, 4, '1', '2'));
  });

  test('list with duplicate maps', () => {
    const l = Immutable.fromJS([ { a: 1 }, { a: 1 }, { a: 2 }, { b: 2 } ]);
    expect(l.unique()).toEqualImmutable(Immutable.fromJS([ { a: 1 }, { a: 2 }, { b: 2 } ]));
  });

  test('list with duplicate maps with key specified', () => {
    const l = Immutable.fromJS([ { a: 1, b: 2 }, { a: 1, b: 3 }, { a: 2 }, { b: 2 } ]);
    expect(l.unique('b')).toEqualImmutable(Immutable.fromJS([ { b: 2 }, { a: 1, b: 3 }, { a: 2 } ]));
  });
});
