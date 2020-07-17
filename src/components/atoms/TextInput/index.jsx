/**
 * Core dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Styles
 */
import './TextInput.scss';

const TextInput = ({
  value,
  placeholder,
  onChange,
  className,
  removeDefaultStyles,
  disabled,
  onFocus,
  onBlur,
}) => {
  return (
    <input
      className={classNames(
        'text-input',
        { 'text-input--non-generic': !removeDefaultStyles },
        className,
      )}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => (disabled ? false : onChange(e.target.value))}
      disabled={disabled}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

TextInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.string,
  removeDefaultStyles: PropTypes.bool,
  disabled: PropTypes.bool,
};

TextInput.defaultProps = {
  value: '',
  placeholder: '',
  onChange: () => true,
  onFocus: () => true,
  onBlur: () => true,
  className: '',
  removeDefaultStyles: false,
  disabled: false,
};

export default TextInput;
