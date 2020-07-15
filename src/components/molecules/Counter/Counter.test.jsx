/**
 * Base dependencies
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './index';

describe('Counter', () => {
  it('renders without crash', () => {
    const counter = render(<Counter id="1" />);
    expect(counter).not.toBeNull();
  });

  it('renders with props', () => {
    const counter = render(
      <Counter
        id="1"
        onDecrease={() => true}
        onIncrease={() => true}
        value={5}
        title="Empanadas de queso"
      />,
    );
    expect(counter).not.toBeNull();
  });

  it('gets focused', () => {
    const { getByRole } = render(<Counter id="1" />);
    const counter = getByRole('menuitem');
    counter.focus();
    expect(counter).toHaveFocus();
  });

  it('should call onIncrease callback when: increase counter button is clicked', () => {
    const onIncrease = jest.fn();
    const { getByLabelText } = render(<Counter id="1" onIncrease={onIncrease} value={1} />);
    const increaseButton = getByLabelText('Increase Value');
    fireEvent.click(increaseButton);
    expect(onIncrease).toHaveBeenCalled();
  });

  it('should call onDecrease callback when: value is greater than 0 and decrease counter button is clicked', () => {
    const onDecrease = jest.fn();
    const { getByLabelText } = render(<Counter id="1" onDecrease={onDecrease} value={1} />);
    const decreaseButton = getByLabelText('Decrease Value');
    fireEvent.click(decreaseButton);
    expect(onDecrease).toHaveBeenCalled();
  });

  it('should not call onDecrease callback when: value is less or equal to 0 and decrease counter button is clicked', () => {
    const onDecrease = jest.fn();
    const { getByLabelText } = render(<Counter id="1" onDecrease={onDecrease} value={0} />);
    const decreaseButton = getByLabelText('Decrease Value');
    fireEvent.click(decreaseButton);
    expect(onDecrease).not.toHaveBeenCalled();
  });
});
