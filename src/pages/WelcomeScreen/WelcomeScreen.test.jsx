/**
 * Base dependencies
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import WelcomeScreen from './WelcomeScreen';

describe('Welcome screen', () => {
  it('renders without crash', () => {
    const welcomeScreen = render(<WelcomeScreen />);
    expect(welcomeScreen).not.toBeNull();
  });

  it('contains logo', () => {
    render(<WelcomeScreen />);
    expect(screen.getByAltText('Counters logo')).toBeInTheDocument();
  });
});
