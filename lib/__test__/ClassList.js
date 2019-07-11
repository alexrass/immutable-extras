const Immutable = require('immutable');
require('../');

describe('ClassList', () => {
  class TestClass {}

  test('throw if no class specified', () => {
    expect(() => Immutable.ClassList()).toThrow();
  });

  test('empty list', () => {
    const l = [];
    expect(Immutable.ClassList(TestClass)()).toEqualImmutable(Immutable.List());
    expect(Immutable.ClassList(TestClass)(l)).toEqualImmutable(Immutable.List());
  });

  test('list using .of', () => {
    const l = [ {} ];
    expect(Immutable.ClassList(TestClass).of(l).get(0)).toBeInstanceOf(TestClass);
  });

  test('list using constructor', () => {
    const l = [ {} ];
    expect(Immutable.ClassList(TestClass)(l).get(0)).toBeInstanceOf(TestClass);
  });
});
