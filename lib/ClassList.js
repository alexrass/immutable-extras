const Immutable = require('immutable');

/**
 * Take a list of items and convert them to instances of the specified class
 *
 * @param {Class} ModelClass
 */
Immutable.ClassList = function(ModelClass) {
  if (!ModelClass) {
    throw new Error('Missing ModelClass parameter.');
  }

  const mapper = i => new ModelClass(i);
  const baseFunc = function(...args) {
    return Immutable.List(...args).map(mapper);
  };
  baseFunc.of = function(...args) {
    return Immutable.List.of(...args).map(mapper);
  };

  return baseFunc;
};
