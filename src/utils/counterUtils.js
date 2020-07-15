const getCardinality = (counters) => counters.length;

const getSelected = (counters) => counters.filter((a) => a.isSelected);

const getTotalCount = (counters) => counters.map((a) => a.count).reduce((a, b) => a + b, 0);

const parseToText = (counter) => `${counter.count} x ${counter.title}`;

const filterByTitle = (counters, word) =>
  counters.filter((counter) => counter.title.toLowerCase().includes(word));

export { getTotalCount, getCardinality, getSelected, parseToText, filterByTitle };
