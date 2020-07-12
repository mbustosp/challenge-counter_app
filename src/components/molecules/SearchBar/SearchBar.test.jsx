/**
 * Base dependencies
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from './index';

describe('SearchBar', () => {
  it('renders without crash', () => {
    const searchBar = render(<SearchBar />);
    expect(searchBar).not.toBeNull();
  });

  it('does not render cancel button when value is not provided', () => {
    const { queryByRole } = render(<SearchBar />);
    expect(queryByRole('button')).toBeNull();
  });

  it('renders cancel button when value is provided', () => {
    const { queryByRole } = render(<SearchBar value="I am a value" />);
    expect(queryByRole('button')).not.toBeNull();
  });

  it('calls onCancel callback when cancel button is clicked', () => {
    const onCancel = jest.fn();
    const { queryByRole } = render(<SearchBar value="I am a value" onCancel={onCancel} />);
    fireEvent.click(queryByRole('button'));
    expect(onCancel).toHaveBeenCalledTimes(1);
  });
});
