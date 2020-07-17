/**
 * Base dependencies
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import WelcomeScreen from './index';

describe('Index screen', () => {
  let welcomeScreen;

  beforeEach(() => {
    welcomeScreen = render(<WelcomeScreen />);
  });

  it('renders without crash', () => {
    expect(welcomeScreen).not.toBeNull();
  });

  it('contains logo', () => {
    const logo = screen.getByAltText('Counters logo');
    expect(logo).not.toBeNull();
  });

  it('contains "Get Started" button', () => {
    const getStartedButton = screen.getByRole('button', { text: 'Get Started' });
    expect(getStartedButton).not.toBeNull();
  });
});
