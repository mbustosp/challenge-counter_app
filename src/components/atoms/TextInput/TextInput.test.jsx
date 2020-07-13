/**
 * Base dependencies
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextInput from './index';

describe('TextInput', () => {
  it('renders without crash', () => {
    const textInput = render(<TextInput />);
    expect(textInput).not.toBeNull();
  });

  it('renders with props', () => {
    const tellTheTruth = () => true;
    const textInput = render(
      <TextInput
        placeholder="This is a place holder"
        onChange={tellTheTruth}
        removeDefaultStyles
        className=""
        value="myValue"
      />,
    );
    expect(textInput).not.toBeNull();
  });

  it('sets and renders the value', () => {
    const inputValue = 'The Value';
    const { queryByDisplayValue } = render(<TextInput value={inputValue} />);
    expect(queryByDisplayValue(inputValue)).not.toBeNull();
  });

  it('sets and renders the placeholder', () => {
    const inputPlaceholder = 'I am just a simple placeholder';
    const { queryAllByPlaceholderText } = render(<TextInput placeholder={inputPlaceholder} />);
    expect(queryAllByPlaceholderText(inputPlaceholder)).not.toBeNull();
  });

  it('removes non-generic class if removeDefaultStyles is set to true', () => {
    const { container } = render(<TextInput removeDefaultStyles />);
    expect(container.firstChild).not.toHaveClass('text-input--non-generic');
  });

  it('calls onChange prop when typing', () => {
    const onChange = jest.fn((newValue) => newValue);
    const copiedValue = 'This will be pasted';
    const { container } = render(<TextInput onChange={onChange} />);
    fireEvent.change(container.firstChild, { target: { value: copiedValue } });
    expect(onChange).toHaveReturnedWith(copiedValue);
  });

  it('does not call onChange prop when typing and it is disabled', () => {
    const onChange = jest.fn((newValue) => newValue);
    const copiedValue = 'This will be pasted';
    const { container } = render(<TextInput onChange={onChange} disabled />);
    fireEvent.change(container.firstChild, { target: { value: copiedValue } });
    expect(onChange).not.toHaveBeenCalled();
  });
});
