const Immutable = require('immutable');
require('../');

describe('List.prototype.class', () => {
    class TestClass {}

    test('empty list', () => {
        const l = Immutable.List();
        expect(l.class(TestClass)).toEqualImmutable(Immutable.List());
    });

    test('list with items', () => {
        const l = Immutable.List.of({});
        expect(l.class(TestClass).get(0)).toBeInstanceOf(TestClass);
    });
});
