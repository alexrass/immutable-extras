const Immutable = require('immutable');

const setHelper = (key, remainingKeys, map, value) => {
  if (remainingKeys.isEmpty()) {
    return map.set(key, value);
  }

  const innerValue = setHelper(
    remainingKeys.first(),
    remainingKeys.rest(),
    map.get(key) === undefined ? Immutable.Map() : map.get(key),
    value
  );

  return map.set(key, innerValue);
};
/**
 * Safely set a value in a map, even if the path is only partially available
 *
 * @param {Iterable} keyPath       Any iterable value determining path
 */
Immutable.Map.prototype.safeSetIn = function(keyPath, value) {
  const path = Immutable.List(keyPath);

  return setHelper(
    path.first(),
    path.rest(),
    this,
    value
  );
};
