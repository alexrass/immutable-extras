immutable-extras
================

Simple extensions for the [Immutable.js library](https://github.com/facebook/immutable-js/)

Install
-------

```bash
npm install --save immutable-extras
```
```bash
yarn add immutable-extras
```

<br>

Usage
-----

```javascript
import Immutable from 'immutable';
import 'immutable-extras';

const someList = Immutable.List([
  Immutable.Map({
    id: 5,
    name: 'a'
  }),
  Immutable.Map({
    id: 15,
    name: 'b'
  }),
  Immutable.Map({
    id: 5,
    name: 'c'
  }),
  Immutable.Map({
    id: 5,
    name: 'a'
  }),
]);

const uniqueList = someList.unique('id');
// uniqueList ->
//    [ { id: 5, name: 'a' }, { id: 15, name: 'b' } ]

const mapped = someList.mapOn(v => v.name);
// mapped ->
//    {
//      a: { id: 5, name: 'a' },
//      b: { id: 15, name: 'b' },
//      c: { id: 5, name: 'c' },
//    }

const sortedList = Immutable.List([ 'bd', 'ab', 'c', 'bb']).multiSort(
  (a, b) => b.length - a.length,
  (a, b) => a.localeCompare(b),
)
// sortedList ->
//    ["ab", "bb", "bd", "c"]

const groupedList = Immutable.List([ '1', '2', '3', '4' ]).group(2)
// groupedList ->
//    [ [ '1', '2' ], [ '3', '4' ]]

const safeSetMap = Immutable.fromJS({ a: undefined }).safeSetIn({ a: { b: 'c' }})
// safeSetMap ->
//   {
//     a: {
//       b: 'c'
//     }
//   }

class TestClass {}
const classList1 = Immutable.ClassList(TestClass)([ { a: 1 } ]);
const classList2 = Immutable.ClassList(TestClass).of({ a: 1 });
// classList1 ->
//   Immutable.List([ TestClass({ a: 1 }) ])
// classList2 ->
//   Immutable.List([ TestClass({ a: 1 }) ])
```
