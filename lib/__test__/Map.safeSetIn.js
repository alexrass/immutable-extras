const Immutable = require('immutable');
require('../');

describe('Map.prototype.safeSetIn', () => {
  test('empty map', () => {
    const m = Immutable.Map();
    expect(m.safeSetIn([ 'a', 'b' ], 'c')).toEqualImmutable(Immutable.Map({ a: Immutable.Map({ b: 'c' }) }));
  });

  test('map with full path available', () => {
    const m = Immutable.fromJS({ a: { b: 'c' } });
    expect(m.safeSetIn([ 'a', 'b' ], 'd')).toEqualImmutable(Immutable.Map({ a: Immutable.Map({ b: 'd' }) }));
  });

  test('map with unrelated paths available', () => {
    const m = Immutable.fromJS({ a: { b: 'c' } });
    expect(m.safeSetIn([ 'd', 'e' ], 'f')).toEqualImmutable(Immutable.Map({ a: Immutable.Map({ b: 'c' }), d: Immutable.Map({ e: 'f' }) }));
  });

  test('map with partial path available', () => {
    const m = Immutable.fromJS({ a: undefined });
    expect(m.safeSetIn([ 'a', 'd' ], 'e')).toEqualImmutable(Immutable.Map({ a: Immutable.Map({ d: 'e' }) }));
  });

  test('map with mixed data', () => {
    const m = Immutable.Map({ a: { b: 'c' } });
    expect(m.safeSetIn([ 'a', 'd' ], 'e').toJSON()).toEqual({ a: { b: 'c', d: 'e' } });
  });
});
