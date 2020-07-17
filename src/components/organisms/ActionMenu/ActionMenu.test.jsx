/**
 * Base dependencies
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ActionMenu from './index';

describe('Action Menu', () => {
  it('renders without crash', () => {
    const searchBar = render(<ActionMenu />);
    expect(searchBar).not.toBeNull();
  });

  it('delete and share buttons are not visible when selected counters are not provided', () => {
    const { queryByLabelText } = render(
      <ActionMenu onDelete={() => true} onAdd={() => true} selectedCounters={[]} />,
    );
    expect(queryByLabelText('share')).toBeNull();
    expect(queryByLabelText('delete')).toBeNull();
  });

  it('delete and share buttons are visible when selected counters are provided', () => {
    const { queryByLabelText } = render(
      <ActionMenu
        onDelete={() => true}
        onAdd={() => true}
        selectedCounters={[{ id: 1 }, { id: 2 }]}
      />,
    );
    expect(queryByLabelText('share')).not.toBeNull();
    expect(queryByLabelText('delete')).not.toBeNull();
  });

  it('open creation modal when add button is clicked', () => {
    const { queryByLabelText, queryByText } = render(
      <ActionMenu
        onDelete={() => true}
        onChange={() => true}
        selectedCounters={[{ id: 1 }, { id: 2 }]}
      />,
    );
    fireEvent.click(queryByLabelText('add'));
    expect(queryByText('Create counter')).not.toBeNull();
  });
});
