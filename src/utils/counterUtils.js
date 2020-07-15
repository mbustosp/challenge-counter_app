const getCardinality = (counters) => counters.length;

const getSelectedCount = (counters) => counters.filter((a) => a.isSelected).length;

const getTotalCount = (counters) => counters.map((a) => a.count).reduce((a, b) => a + b, 0);

const parseToText = (counter) => `${counter.count} x ${counter.name}`;

export { getTotalCount, getCardinality, getSelectedCount, parseToText };