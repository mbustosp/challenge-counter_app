/**
 * Base dependencies
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders without crash', () => {
    const button = render(<Button />);
    expect(button).not.toBeNull();
  });

  it('renders with props', () => {
    const label = 'I was just created for testing purposes';
    const actionOnClick = () => true;
    const button = render(<Button onClick={actionOnClick} label={label} disabled />);
    expect(button).not.toBeNull();
  });

  it('renders children', () => {
    const childMessage = 'I am a test child';
    const buttonChild = <div>{childMessage}</div>;
    const button = render(<Button>{buttonChild}</Button>);
    expect(button.queryByText(childMessage)).not.toBeNull();
  });

  it('renders label', () => {
    const buttonLabel = 'I am label';
    const button = render(<Button label={buttonLabel} />);
    expect(button.queryByText(buttonLabel)).not.toBeNull();
  });

  it('renders label instead of children when both are present', () => {
    const buttonLabel = 'I am label';
    const childMessage = 'I am a child';
    const buttonChild = <div>{childMessage}</div>;
    const button = render(<Button label={buttonLabel}>{buttonChild}</Button>);
    expect(button.queryByText(buttonLabel)).not.toBeNull();
    expect(button.queryByText(childMessage)).toBeNull();
  });

  it('calls onClick prop when it gets clicked', () => {
    const buttonLabel = 'click me';
    const actionOnClick = jest.fn();
    const { getByText } = render(<Button onClick={actionOnClick} label={buttonLabel} />);
    fireEvent.click(getByText(buttonLabel));
    expect(actionOnClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick prop when it gets clicked but it is disabled', () => {
    const buttonLabel = 'I am not in the mood to receive clicks';
    const actionOnClick = jest.fn();
    const { getByText } = render(<Button onClick={actionOnClick} label={buttonLabel} disabled />);
    fireEvent.click(getByText(buttonLabel));
    expect(actionOnClick).toHaveBeenCalledTimes(0);
  });
});
