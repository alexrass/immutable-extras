const Immutable = require('immutable');

/**
 * Create a map from a list.
 *
 * @param {function/string} funcOrKey       Key or function to map
 */
Immutable.List.prototype.mapOn = function(funcOrKey) {
  if (typeof funcOrKey === 'function') {
    return Immutable.Map(this.map(item => [ funcOrKey(item), item ]));
  } else {
    return Immutable.Map(this.map(item => {
      if (typeof item.get === 'function') {
        return [ item.get(funcOrKey), item ];
      } else {
        return [ item[funcOrKey], item ];
      }
    }));
  }
};
