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

const TextInput = ({ value, placeholder, onChange, className, removeDefaultStyles, disabled }) => {
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
    />
  );
};

TextInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  removeDefaultStyles: PropTypes.bool,
  disabled: PropTypes.bool,
};

TextInput.defaultProps = {
  value: '',
  placeholder: '',
  onChange: () => true,
  className: '',
  removeDefaultStyles: false,
  disabled: false,
};

export default TextInput;
