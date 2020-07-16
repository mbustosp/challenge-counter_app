/**
 * Gets the number of elements of the given collection.
 * @param {Object[]} counters Collection of counters.
 * @returns {number} Cardinality of the provided collection.
 */
const getCardinality = (counters) => counters.length;

/**
 * Gets from the given collection those elements that have isSelected property set to true.
 * @param {Object[]} counters Collection of counters.
 * @returns {Object[]} Collection of selected elements.
 */
const getSelected = (counters) => counters.filter((a) => a.isSelected);

/**
 * Gets the sum of all count values contained in the provided collection.
 * @param {Object[]} counters Collection of counters.
 * @returns {number} Sum of all count values.
 */
const getTotalCount = (counters) => counters.map((a) => a.count).reduce((a, b) => a + b, 0);

/**
 * Gets a text representation of the provided counter object. If no title is provided then 'Unknown Counter' is used.
 * @param {Object} counter Information of the counter.
 * @returns {string} Text representation of the counter (e.g. {title: Razor Blades, count: 25} => 25 x Razor Blades).
 */
const parseToText = (counter) =>
  `${counter.count} x ${counter.title ? counter.title : 'Unknown Counter'}`;

/**
 * Gets from the given collection all those elements whose title contains the provided word (case insensitive).
 * @param {Object[]} counters Collection of counters.
 * @param {String} word Word that will be used to filter the counters.
 * @returns {Object[]} Collection of counter whose titles contain the provided word.
 */
const filterByTitle = (counters, word) => {
  const lowercaseWord = word.toLowerCase();
  return counters.filter((counter) => counter.title.toLowerCase().includes(lowercaseWord));
};

export { getTotalCount, getCardinality, getSelected, parseToText, filterByTitle };
