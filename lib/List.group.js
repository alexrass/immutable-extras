const Immutable = require('immutable');

/**
 * Convert list into groups of X items.
 *
 * @param {number} groupSize
 */
Immutable.List.prototype.group = function(groupSize) {
  const groupCount = Math.ceil(this.size / groupSize);
  const list = this;
  return Immutable.Range(0, groupCount).toMap().map(group => {
    return list.slice(group * groupSize, (group + 1) * groupSize);
  }).toList();
};
