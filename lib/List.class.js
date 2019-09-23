const Immutable = require('immutable');

/**
 * Process list items into specified class.
 *
 * @param {Class} ClassModel
 */
Immutable.List.prototype.class = function(ClassModel) {
    const list = this;
    return list.map(i => new ClassModel(i));
};
