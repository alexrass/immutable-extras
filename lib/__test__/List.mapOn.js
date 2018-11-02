const Immutable = require('immutable');
require('../');


describe('List.prototype.mapOn', () => {
  test('empty list', () => {
    const l = Immutable.List();
    expect(l.mapOn('a')).toEqualImmutable(Immutable.Map());
  });

  test('passing a string for a list of immutable maps', () => {
    const l = Immutable.fromJS([ { a: 'abc' }, { a: 'def' } ]);
    expect(l.mapOn('a')).toEqualImmutable(Immutable.fromJS({ 'abc': { 'a': 'abc' }, 'def': { 'a': 'def' } }));
  });

  test('passing a string for list of objects', () => {
    const l = Immutable.List([ { a: 'abc' }, { a: 'def' } ]);
    expect(l.mapOn('a').toJSON()).toEqual({ 'abc': { 'a': 'abc' }, 'def': { 'a': 'def' } });
  });

  test('passing a function for list of immutable maps', () => {
    const l = Immutable.fromJS([ { a: 'abc' }, { a: 'def' } ]);
    expect(l.mapOn(i => i.get('a'))).toEqualImmutable(Immutable.fromJS({ 'abc': { 'a': 'abc' }, 'def': { 'a': 'def' } }));
  });

  test('passing a function for list of objects', () => {
    const l = Immutable.List([ { a: 'abc' }, { a: 'def' } ]);
    expect(l.mapOn(i => i.a).toJSON()).toEqual({ 'abc': { 'a': 'abc' }, 'def': { 'a': 'def' } });
  });
});
