const Immutable = require('immutable');
require('../');

describe('Map.prototype.safeGetIn', () => {
  test('empty map', () => {
    const m = Immutable.Map();
    expect(m.safeGetIn([ 'a', 'b' ])).toEqual(undefined);
  });

  test('map with full path available', () => {
    const m = Immutable.fromJS({ a: { b: 'c' } });
    expect(m.safeGetIn([ 'a', 'b' ])).toEqual('c');
  });

  test('map with unrelated paths available', () => {
    const m = Immutable.fromJS({ a: { b: 'c' } });
    expect(m.safeGetIn([ 'd', 'e' ])).toEqual(undefined);
  });

  test('map with partial path available', () => {
    const m = Immutable.fromJS({ a: undefined });
    expect(m.safeGetIn([ 'a', 'd' ])).toEqual(undefined);
  });

  test('map with mixed data', () => {
    const m = Immutable.Map({ a: { b: 'c' } });
    expect(m.safeGetIn([ 'a', 'b' ])).toEqual('c');
    expect(m.safeGetIn([ 'a', 'b', 'c' ])).toEqual(undefined);
  });
});
