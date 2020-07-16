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
    const { queryByLabelText, debug } = render(
      <ActionMenu
        onDelete={() => true}
        onAdd={() => true}
        selectedCounters={[{ id: 1 }, { id: 2 }]}
      />,
    );
    debug();
    expect(queryByLabelText('share')).not.toBeNull();
    expect(queryByLabelText('delete')).not.toBeNull();
  });

  it('calls onAdd callback when add button is pressed', () => {
    const onAdd = jest.fn();
    const { queryByLabelText } = render(
      <ActionMenu onDelete={() => true} onAdd={onAdd} selectedCounters={[{ id: 1 }, { id: 2 }]} />,
    );
    fireEvent.click(queryByLabelText('add'));
    expect(onAdd).toHaveBeenCalled();
  });
});
