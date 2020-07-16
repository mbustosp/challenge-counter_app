/**
 * Base dependencies
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import faker from 'faker';
import CounterList from './index';

describe('Counter List', () => {
  /**
   * Data
   */
  const counters = Array(100)
    .fill()
    .map((val, key) => ({
      id: `${key}`,
      title: faker.commerce.productName(),
      count: faker.random.number(),
      isSelected: faker.random.number(1) === 1,
    }));

  it('renders without crash', () => {
    const searchBar = render(<CounterList counters={counters} />);
    expect(searchBar).not.toBeNull();
  });

  it('calls onRefresh callback when refresh button is clicked', () => {
    const onRefresh = jest.fn();
    const { queryByLabelText } = render(<CounterList counters={counters} onRefresh={onRefresh} />);
    fireEvent.click(queryByLabelText('refresh'));
    expect(onRefresh).toHaveBeenCalled();
  });
});
