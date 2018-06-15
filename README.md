immutable-extras
================

Simple extensions for the [Immutable.js library](https://github.com/facebook/immutable-js/)

Install
-------

```bash
npm install --save immutable-extras
```
```bash
yarn add --save immutable-extras
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
```
