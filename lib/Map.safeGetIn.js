const Immutable = require('immutable');

const getHelper = (key, remainingKeys, map) => {
  const mapIsMap = !!map.get && (map instanceof Immutable.Map || map instanceof Immutable.Record);
  if (remainingKeys.isEmpty()) {
    if (mapIsMap) {
      return map.get(key);
    } else {
      return map[key];
    }
  }

  let innerMap;
  if (mapIsMap && map.get(key) !== undefined) {
    innerMap = map.get(key);
  } else if (!mapIsMap && map[key] !== undefined) {
    innerMap = map[key];
  } else {
    return undefined;
  }

  return getHelper(
    remainingKeys.first(),
    remainingKeys.rest(),
    innerMap
  );
};
/**
 * Safely get a value in a map, even if the path is only partially available
 *
 * @param {Iterable} keyPath       Any iterable value determining path
 */
Immutable.Map.prototype.safeGetIn = function(keyPath) {
  const path = Immutable.List(keyPath);

  return getHelper(
    path.first(),
    path.rest(),
    this
  );
};
