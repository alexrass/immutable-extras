import Immutable from 'immutable';

/**
 * Create a map from a list.
 *
 * Argument should be one of:
 *  1. a key to map on
 *  2. a function that returns a string
 */
Immutable.List.prototype.mapOn = function(funcOrKey) {
  if (typeof funcOrKey === 'function') {
    return Immutable.Map(this.map(item => [ funcOrKey(item), item ]));
  } else if (typeof funcOrKey === 'string') {
    return Immutable.Map(this.map(item => {
      if (!!item.get) {
        return [ item.get(funcOrKey), item ];
      } else {
        return [ item[funcOrKey], item ];
      }
    }));
  }
};

/**
 * Create a unique list.
 *
 * Optional parameter that can be passed in to check for uniqueness,
 *   otherwise just compare full values of the list.
 */
Immutable.List.prototype.unique = function(funcOrKey) {
  if (!!funcOrKey) {
    return this.mapOn(funcOrKey).toList();
  } else {
    return this.toSet().toList();
  }
};
