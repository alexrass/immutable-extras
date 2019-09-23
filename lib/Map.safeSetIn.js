const Immutable = require('immutable');

const setHelper = (key, remainingKeys, map, value) => {
  const mapIsMap = !!map.set && (map instanceof Immutable.Map || map instanceof Immutable.Record);
  if (remainingKeys.isEmpty()) {
    if (mapIsMap) {
      return map.set(key, value);
    } else {
      map[key] = value;
      return map;
    }
  }

  let innerMap;
  if (mapIsMap) {
    innerMap = (map.get(key) === undefined || map.get(key) === null) ? Immutable.Map() : map.get(key);
  } else {
    innerMap = (map[key] === undefined || map[key] === null) ? {} : map[key];
  }

  const innerValue = setHelper(
    remainingKeys.first(),
    remainingKeys.rest(),
    innerMap,
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
