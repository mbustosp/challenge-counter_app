/**
 * Base dependencies
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CounterList from './index';

describe('Counter List', () => {
  it('renders without crash', () => {
    const searchBar = render(<CounterList />);
    expect(searchBar).not.toBeNull();
  });

  it('calls onRefresh callback when refresh button is clicked', () => {
    const onRefresh = jest.fn();
    const { queryByLabelText } = render(<CounterList onRefresh={onRefresh} />);
    fireEvent.click(queryByLabelText('refresh'));
    expect(onRefresh).toHaveBeenCalled();
  });
});
