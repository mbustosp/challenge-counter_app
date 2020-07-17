/**
 * Base dependencies
 */
import {
  filterByTitle,
  getCardinality,
  getSelected,
  getTotalCount,
  parseToText,
} from './counterUtils';

describe('Counter Utils', () => {
  const mockCounter = (count, isSelected = false) => ({
    id: count,
    title: `${count}`,
    count,
    isSelected,
  });

  describe('getCardinality', () => {
    it('returns 0 for empty collections', () => {
      expect(getCardinality([])).toBe(0);
    });
    it('gets 3 for a collection of 3 counters', () => {
      const threeCountersCollection = [mockCounter(1), mockCounter(2), mockCounter(3)];
      expect(getCardinality(threeCountersCollection)).toBe(3);
    });
  });

  describe('getSelected', () => {
    it('returns empty collection for a collection of non selected elements', () => {
      const threeNonSelectedCountersCollection = [mockCounter(1), mockCounter(2), mockCounter(3)];
      expect(getSelected(threeNonSelectedCountersCollection)).toHaveLength(0);
    });

    it('gets collection of 2 counters for a collection of 3 counters that has 2 counters selected', () => {
      const twoSelectedCountersCollection = [mockCounter(1, true), mockCounter(2, true)];
      const countersCollection = [...twoSelectedCountersCollection, mockCounter(3)];
      expect(getSelected(countersCollection)).toHaveLength(2);
    });
  });

  describe('getTotalCount', () => {
    it('returns 0 for an empty collection of counters', () => {
      const emptyCollection = [];
      expect(getTotalCount(emptyCollection)).toBe(0);
    });

    it('gets 12 for a collection of three counters with the following count values: 2, 3, 7', () => {
      const countersCollection = [mockCounter(2, true), mockCounter(3), mockCounter(7)];
      expect(getTotalCount(countersCollection)).toBe(12);
    });
  });

  describe('parseToText', () => {
    it('returns "3 - Unknown Counter" for the following counter { id: 1, count: 3 } ', () => {
      const counter = { id: '1', count: 3 };
      expect(parseToText(counter)).toBe('3 x Unknown Counter');
    });

    it('returns "2 x Mote con huesillo" for the following counter { title: Mote con huesillo, count: 2 }"', () => {
      const counter = { title: 'Mote con huesillo', count: 2 };
      expect(parseToText(counter)).toBe('2 x Mote con huesillo');
    });
  });

  describe('filterByTitle', () => {
    it('works using non sensitive case comparison', () => {
      const word = 'MoTe coN HUEsilLos';
      const nonSensitiveMatch = { id: 1, title: 'El Mote con Huesillos', count: 2 };
      const counters = [{ ...nonSensitiveMatch }, { id: 2, title: 'no match', count: 2 }];
      expect(filterByTitle(counters, word)).toContainEqual(nonSensitiveMatch);
    });
  });
});
