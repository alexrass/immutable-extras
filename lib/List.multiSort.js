const Immutable = require('immutable');

function sortHelper(a, b, sortFns) {
  const [ currentFn, ...nextFns ] = sortFns;

  if (currentFn) {
    const result = currentFn(a, b);
    if (result === 0) {
      return sortHelper(a, b, nextFns);
    } else {
      return result;
    }
  } else {
    return 0;
  }
}

/**
 * Sort by multiple criteria
 *
 * @param {vararg[func]} sortFns    Variable arg list of sorting functions
 */
Immutable.List.prototype.multiSort = function(...sortFns) {
  if (sortFns.length > 0) {
    return this.sort((a, b) => sortHelper(a, b, sortFns));
  } else {
    return this.sort();
  }
};
