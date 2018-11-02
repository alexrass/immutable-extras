const Immutable = require('immutable');

require('./List.mapOn');

/**
 * Create a unique list.
 *
 * @param {Option[function/string]} funcOrKey       Optional parameter that can be passed in to check for uniqueness,
 */
Immutable.List.prototype.uniq = Immutable.List.prototype.unique = function(funcOrKey) {
  if (funcOrKey) {
    return this.mapOn(funcOrKey).toList();
  } else {
    return this.toSet().toList();
  }
};
