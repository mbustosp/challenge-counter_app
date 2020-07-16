/**
 * Base dependencies
 */
import React from 'react';
import { render } from '@testing-library/react';
import Main from './index';

describe('Main Page', () => {
  it('renders without crash', () => {
    const searchBar = render(<Main />);
    expect(searchBar).not.toBeNull();
  });
});
